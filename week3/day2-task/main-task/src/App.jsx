import { useState } from "react";
import DataFetcher from "./components/DataFetcher";
import Timer from "./components/Timer";
import DisplayPosts from "./components/DisplayPosts";
import MountLogger from "./components/MountLogger";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "./components/Modal";

function App() {
  const [posts, setPosts] = useState([]);
  const [showLogger, setShowLogger] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6 space-y-4 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">React Data Fetcher</h1>
        
        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            onClick={() => setShowLogger(!showLogger)}
          >
            Toggle MountLogger
          </button>
          
          <button
            className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-700 transition-colors"
            onClick={() => setShowModal(true)}
          >
            Show Posts Info
          </button>
        </div>
      </div>

      <Timer />
      <DataFetcher onFetch={setPosts} />
      <DisplayPosts posts={posts} />

      {showLogger && <MountLogger />}

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ModalHeader>Posts Information</ModalHeader>
          <ModalBody>
            <p className="text-gray-600">
              Total posts fetched: {posts.length}
            </p>
            <div className="mt-4 space-y-2">
              {posts.slice(0, 5).map(post => (
                <div key={post.id} className="p-2 bg-gray-50 rounded">
                  <h4 className="font-medium">{post.title}</h4>
                  <p className="text-sm text-gray-500 line-clamp-2">{post.body}</p>
                </div>
              ))}
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </ModalFooter>
        </Modal>
      )}
    </div>
  );
}

export default App;