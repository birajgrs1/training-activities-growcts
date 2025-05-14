import Modal from './components/Modal';
import UserList from './components/UserList';
import useStore from './store/uiStore';

const App = () => {
  const { toggleModal } = useStore();

  return (
    <div className="p-8">
      <button 
        className="bg-blue-500 text-white py-2 px-4 rounded" 
        onClick={toggleModal}
      >
        Open Modal
      </button>
      <Modal />
      <h1 className="text-2xl font-bold mt-8">User List</h1>
      <UserList />
    </div>
  );
};

export default App;
