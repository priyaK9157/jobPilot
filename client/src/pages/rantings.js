// Components/RatingsAndReviewsPage.js
import React from 'react';

const RatingsAndReviewsPage = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      designation: 'Software Engineer',
      rating: 4,
      comment: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipi."',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      id: 2,
      name: 'Jane Smith',
      designation: 'Project Manager',
      rating: 5,
      comment: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."',
      profilePic: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      id: 3,
      name: 'Sam Wilson',
      designation: 'UI/UX Designer',
      rating: 5,
      comment: '"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet."',
      profilePic: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
  ];

  return (
    <div className=''>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-3xl text-slate-900 font-bold mb-8 text-center">Clients Testimonial</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
          {reviews.map((review) => (
            <div key={review.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-3"> 
                <div className="flex items-center py-5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 fill-current ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 1l2.35 6.06h6.41l-5.27 4.48L15.68 19 10 15.85 4.32 19l1.19-7.46L3.24 7.06h6.4L10 1zm0 0z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate-600">{review.comment}</p>
                <div className="flex items-center mt-10"> 
                  <img src={review.profilePic} alt={review.name} className="w-10 h-10 rounded-full mr-3" /> 
                  <div>
                    <h2 className="text-base font-semibold text-slate-900">{review.name}</h2>
                    <p className="text-sm text-gray-600">{review.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingsAndReviewsPage;
