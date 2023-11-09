import React from "react";

import { motion } from "framer-motion";

function Comment({ userImg, comment }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-4">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="card h-100 bg-transparent"
      >
        <div className="card-header border-0 bg-transparent">
          <img src={userImg} alt="user profil img" loading="lazy" />
        </div>
        <div className="card-body">
          <p>{comment}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Comment;
