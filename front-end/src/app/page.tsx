import myImg from '@/assets/1234.jpg';

export default function Home() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen " style={{ backgroundColor: '#FCFFE0' }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={myImg.src}
            className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">$10 - Purchase</button>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
