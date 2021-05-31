import axios from "axios";
import { useRouter } from "next/router";
import { FormEvent, useContext, useState } from "react";
import { ArticlesContext } from "../context/articles";

const create = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const { fetchAllArticles } = useContext(ArticlesContext);
  const router = useRouter();

  const submitArticle = async (e: FormEvent) => {
    e.preventDefault();

    if (title.trim() === "") return;

    try {
      const token = localStorage.getItem("accessToken");
      await axios.post(
        "/articles",
        { title: title, content: content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      fetchAllArticles();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-screen-sm p-4 mx-auto mt-10 bg-white rounded ">
      <h1 className="mb-3 text-lg">Create an article</h1>

      <form onSubmit={submitArticle}>
        <div className="relative mb-2">
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
            placeholder="Title"
            maxLength={300}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div
            className="absolute mb-2 text-sm text-gray-500 select-none focus:border-gray-600"
            style={{ top: 11, right: 10 }}
          >
            {/* e.g. 15/300 */}
            {title.trim().length}/300
          </div>
        </div>
        <textarea
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Text (optional)"
          rows={4}
        ></textarea>
        <div className="flex justify-end">
          <button
            className="px-3 py-1 text-xs font-medium text-white uppercase bg-blue-500 rounded"
            type="submit"
            disabled={title.trim().length === 0}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default create;
