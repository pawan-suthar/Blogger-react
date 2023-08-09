import BlogpostContainer from "./components/BlogpostContainer";
import Category from "./components/Category";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      <Navbar />
      <Newsletter />
      <Category />
      <div className="grid lg:grid-cols-2 w-[85%] gap-5 mx-auto my-20">
        <BlogpostContainer
          title="Blog 1"
          subtitle="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          tag="blog"
          img="https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <BlogpostContainer
          title="Blog 2"
          subtitle="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          tag="blog"
          img="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <BlogpostContainer
          title="Blog 3"
          subtitle="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          tag="blog"
          img="https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <BlogpostContainer
          title="Blog 4"
          subtitle="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          tag="blog"
          img="https://images.pexels.com/photos/6954174/pexels-photo-6954174.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <BlogpostContainer
          title="Blog 5"
          subtitle="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          tag="blog"
          img="https://images.pexels.com/photos/3856041/pexels-photo-3856041.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <BlogpostContainer
          title="Blog 6"
          subtitle="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
          tag="blog"
          img="https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
