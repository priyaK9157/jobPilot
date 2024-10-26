const jwt = require('jsonwebtoken');


const authMiddleware = (req, res, next) => {
  
 const JWT_SECRET = process.env.JWT_SECRET;
 console.log("jwt", JWT_SECRET)
  const data = req.body
  console.log("data",data);
  console.log("now",data.headers.Authorization)
  const token = data.headers.Authorization?.split(' ')[1]; 
  console.log("token",token)

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'No token provided',
    });
  }

  try {
    // Verify token and decode user information
    console.log("token, jwt", token, JWT_SECRET)
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("decoded", decoded)
    req.user = decoded; // Attach decoded user information to request object
    next();
  } catch (error) {
    console.error('JWT verification error:', error);
    return res.status(403).json({
      success: false,
      message: 'Invalid token',
    });
  }
};

module.exports = authMiddleware;
