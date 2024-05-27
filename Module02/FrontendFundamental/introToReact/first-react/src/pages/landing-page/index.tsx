import { useState, useEffect } from "react";
import ReusableComponent from "../../components/ReusableComponent";

const LandingPage = () => {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return (
    <div className="landing-page">
      <h1>Welcome to the Landing Page</h1>
      <ReusableComponent
        title="State"
        description="State adalah objek yang menyimpan data atau informasi yang dapat berubah sepanjang siklus hidup komponen. Di functional component, state dikelola menggunakan useState hook."
      />
      <ReusableComponent
        title="Props"
        description="Props adalah objek yang berisi nilai atau fungsi yang dikirim dari komponen induk ke komponen anak. Props digunakan untuk komunikasi antar komponen."
      />
      <ReusableComponent
        title="Reusable Component"
        description="Reusable component adalah komponen yang dapat digunakan kembali di berbagai bagian aplikasi dengan sedikit atau tanpa perubahan. Mereka membantu membuat kode lebih bersih dan modular."
      />
      <ReusableComponent
        title="Lifecycle Component"
        description="Lifecycle component adalah fase-fase yang dilalui oleh sebuah komponen dari awal dibuat sampai dihapus dari DOM. Di functional component, lifecycle dikelola menggunakan useEffect hook."
      />
      <div className="counter">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Count: {count}</p>
      </div>
    </div>
  );
};

export default LandingPage;
