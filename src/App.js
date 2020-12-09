import Title from './components/Title';
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";

function App() {
  return (
    <div className="App m-auto max-w-7xl">
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  );
}

export default App;
