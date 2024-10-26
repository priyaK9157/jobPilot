const resetPasswordTemplate = (resetLink) => {
	return `<!DOCTYPE html>
	<html>

	<head>
		<meta charset="UTF-8">
		<title>Password Reset Request</title>
		<style>
			body {
				background-color: #f9f9f9;
				font-family: Arial, sans-serif;
				font-size: 16px;
				line-height: 1.6;
				color: #333333;
				margin: 0;
				padding: 0;
			}

			.container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
				background-color: #ffffff;
				border-radius: 10px;
				box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
				text-align: center;
			}

			.logo {
				max-width: 150px;
				margin-bottom: 20px;
			}

			.message {
				font-size: 20px;
				font-weight: bold;
				color: #333333;
				margin-bottom: 20px;
			}

			.body {
				font-size: 16px;
				color: #555555;
				margin-bottom: 30px;
				line-height: 1.8;
			}

			.cta {
				display: inline-block;
				padding: 12px 24px;
				background-color: #007BFF;
				color: #ffffff;
				text-decoration: none;
				border-radius: 5px;
				font-size: 16px;
				font-weight: bold;
				margin-top: 20px;
			}

			.support {
				font-size: 14px;
				color: #999999;
				margin-top: 20px;
			}

			.highlight {
				color: #FF5733;
			}
		</style>

	</head>

	<body>
		<div class="container">
			<a href="https://copartner-web.com"><img class="logo"
					src="https://t3.ftcdn.net/jpg/03/15/59/52/360_F_315595201_Owbc34I9RVou1DXeOAiKXUZz2hjvQETf.jpg" alt="CoPartner Logo"></a>
			<div class="message">Password Reset Request</div>
			<div class="body">
				<p>Hello,</p>
				<p>We received a request to reset your CoPartner account password. If you initiated this request, please click
					the button below to reset your password:</p>
				<a href="${resetLink}" class="cta">Reset Password</a>
				<p>If you did not request a password reset, you can safely ignore this email. The link will expire in 1 hour.</p>
			</div>
			<div class="support">If you have any questions, please contact us at <a href="mailto:support@copartner-web.com">support@copartner-web.com</a>.
				We're here to help!</div>
		</div>
	</body>

	</html>`;
};

module.exports = resetPasswordTemplate;
