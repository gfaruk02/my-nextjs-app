import Counter from "@/components/counter/Counter";
import Link from "next/link";


const HomePage = () => {
 
  return (
    <div>
      <h1> This is my next js app</h1>
      <Counter></Counter>
    <div className="p-5"> 
    <Link href="/about"> 
    <button className="btn btn-primary mr-3"> About </button>
    </Link>
    <Link href="/blog"> 
    <button className="btn btn-primary"> Blog </button>
    </Link>
    </div>
      
    </div>
  );
};

export default HomePage;