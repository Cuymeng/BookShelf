import Image from 'next/image'
import myImg from '@/assets/1234.jpg';

export default function Home() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen " style={{ backgroundColor: '#FCFFE0' }}>
        <div className="hero-content flex-col lg:flex-row-reverse">

          <Image
            src={myImg.src}
            alt="Landscape picture"
            width={500}
            height={500}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">New Release</h1>
            <h2>This Dark Road to mercy</h2>
            <p className="py-6">
              Wade disappeared on us when I was nine years old, and then he showed up out of nowhere the year I turned twelve...
              After their mother unexpectedly dies, Easter Quilby and her six-year-old sister, Ruby, are stolen away from their foster home by the father they have not seen in years.
              Brady Weller, their court-appointed guardian, goes after them, suspecting Wade of having taken part in a recent high-profile robbery. But he is not the only one on their tail, as Robert Pruitt, a mercurial and deadly hunter, is determined to get to them first and claim his due.
            </p>
            <button className="btn btn-primary">$10 - Purchase</button>
            <button className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
