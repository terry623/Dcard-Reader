import axios from "axios";

export default function Home() {
  return (
    <div
      onClick={() => {
        axios
          .get("/api/posts")
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }}
    >
      HELLO WORLD
    </div>
  );
}
