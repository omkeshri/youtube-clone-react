import React from "react";

const commentsData = [
  {
    name: "Om Keshri",
    text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
    replies: [{
        name: "Om Keshri",
        text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
        replies: [{
            name: "Om Keshri",
            text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
            replies: [{
                name: "Om Keshri",
                text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
                replies: [{
                    name: "Om Keshri",
                    text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
                    replies: [],
                  }],
              }],
          }],
      }],
  },
  {
    name: "Om Keshri",
    text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
    replies: [{
        name: "Om Keshri",
        text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
        replies: [{
            name: "Om Keshri",
            text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
            replies: [{
                name: "Om Keshri",
                text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
                replies: [{
                    name: "Om Keshri",
                    text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
                    replies: [],
                  }],
              }],
          }],
      }],
  },
  {
    name: "Om Keshri",
    text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
    replies: [{
        name: "Om Keshri",
        text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
        replies: [{
            name: "Om Keshri",
            text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
            replies: [{
                name: "Om Keshri",
                text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
                replies: [{
                    name: "Om Keshri",
                    text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
                    replies: [],
                  }],
              }],
          }],
      }],
  },
  {
    name: "Om Keshri",
    text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
    replies: [{
        name: "Om Keshri",
        text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
        replies: [{
            name: "Om Keshri",
            text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
            replies: [{
                name: "Om Keshri",
                text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
                replies: [{
                    name: "Om Keshri",
                    text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
                    replies: [],
                  }],
              }],
          }],
      }],
  },
  {
    name: "Om Keshri",
    text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
    replies: [{
        name: "Om Keshri",
        text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
        replies: [{
            name: "Om Keshri",
            text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
            replies: [{
                name: "Om Keshri",
                text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
                replies: [{
                    name: "Om Keshri",
                    text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
                    replies: [],
                  }],
              }],
          }],
      }],
  },

  {
    name: "Om Keshri",
    text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
    replies: [],
  },
  {
    name: "Om Keshri",
    text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
    replies: [],
  },
  {
    name: "Om Keshri",
    text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
    replies: [],
  },
  {
    name: "Om Keshri",
    text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
    replies: [],
  },
  {
    name: "Om Keshri",
    text: "Llfhsdflsdfdsfdfjdlskfjdsfjklfkld",
    replies: [],
  },
];

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-200 my-2">
      <img
        className="w-16 h-10"
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
      ></img>
      <div className="px-3 ">
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="p-2 m-2 w-[70rem]">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
