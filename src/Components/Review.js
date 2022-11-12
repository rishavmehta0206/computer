import React from "react";
import daniel from "../assets/images/image-daniel.jpg";
import jonathan from "../assets/images/image-jonathan.jpg";
import kira from "../assets/images/image-kira.jpg";
import jeanette from "../assets/images/image-jeanette.jpg";
import patrick from "../assets/images/image-patrick.jpg";
const Review = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-4 grid md:grid-cols-4 gap-4 my-20">
      <h1 className="text-3xl font-semibold col-span-4">Our Reviews</h1>
      <div className="md:col-span-2 shadow-2xl w-full p-8 flex flex-col gap-4 bg-purple-500 rounded-xl">
        <div className="flex gap-[30px]">
          <img className="object-fit rounded-full" src={daniel} />
          <div>
            <h1 className="font-semibold text-white">Daniel Clifford</h1>
            <span className="font-light text-white">Verified Graduate</span>
          </div>
        </div>
        <p className="font-bold text-white text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          quisquam necessitatibus, omnis, voluptatum nulla esse dignissimos
          delectus asperiores accusantium vitae consequuntur rem accusamus
          officiis perspiciatis, quidem animi ex? Minima, delectus?
        </p>
        <span className="font-semibold text-gray-400 before:content-[''] after:content-['']">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dicta
          nostrum voluptates perferendis ipsam cupiditate quo consequatur
          consectetur accusamus. Laboriosam commodi earum possimus quaerat,
          fugit iure id rerum neque error totam, ipsam expedita tempore dolorem,
          esse recusandae accusamus similique libero illo nihil in placeat
          minima quisquam molestiae consequatur. Cum aspernatur officia,
          inventore harum explicabo a natus qui iure adipisci rem.
        </span>
      </div>
      <div className="md:col-span-1 shadow-2xl w-full p-8 flex flex-col gap-4 bg-gray-700 rounded-xl">
        <div className="flex gap-[30px]">
          <img className="object-fit rounded-full" src={jonathan} />
          <div>
            <h1 className="font-semibold text-white">
              Jonathan Walters Clifford
            </h1>
            <span className="font-light text-white">Verified Graduate</span>
          </div>
        </div>
        <p className="font-bold text-white text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet!
        </p>
        <span className="font-semibold text-gray-400 before:content-[''] after:content-['']">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus,
          amet officiis? Debitis, dolorem non ducimus doloremque nihil nam,
          nobis, eligendi ipsum quas cupiditate magni? Qui?
        </span>
      </div>
      <div className="md:col-span-1 md:row-span-2 shadow-2xl w-full p-8 flex flex-col gap-4 bg-white-700 rounded-xl">
        <div className="flex gap-[30px]">
          <img className="object-fit rounded-full" src={kira} />
          <div>
            <h1 className="font-semibold text-black">Kira Whittle</h1>
            <span className="font-light text-black">Verified Graduate</span>
          </div>
        </div>
        <p className="font-bold text-black text-xl">
          Lorem dolor, sit amet consectetur adipisicing.
        </p>
        <span className="font-semibold text-gray-400 before:content-[''] after:content-['']">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          nesciunt error laborum quis. Ex magnam at quasi corrupti accusamus
          nostrum reiciendis ad? Voluptatum repudiandae culpa et! Ex in
          consectetur est dignissimos eaque recusandae corrupti saepe voluptatem
          maxime quo debitis alias nam excepturi fugit, iusto molestiae minima!
          Eum, cumque? Magnam ducimus possimus sint ex, eligendi minus,
          expedita, provident neque non sunt similique. Rem, vel illum? Nulla a
          asperiores vero nemo. Dolore veritatis atque nobis nisi illo? Rem
          incidunt voluptas autem cupiditate eaque, atque veniam, laborum sunt
          quidem suscipit aut consequuntur odio? Hic quasi, dolores magni
          officia repellat doloremque in illum quaerat?
        </span>
      </div>
      <div className="shadow-2xl w-full p-8 flex flex-col gap-4 bg-white-700 rounded-xl">
        <div className="flex gap-[30px]">
          <img className="object-fit rounded-full" src={jeanette} />
          <div>
            <h1 className="font-semibold text-black">Jeanette Harmon</h1>
            <span className="font-light text-black">Verified Graduate</span>
          </div>
        </div>
        <p className="font-bold text-black text-xl">
          Lorem dolor, sit amet consectetur adipisicing.
        </p>
        <span className="font-semibold text-gray-400 before:content-[''] after:content-['']">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          repudiandae sint autem corporis odit nisi qui quibusdam provident illo
          tenetur?
        </span>
      </div>
      <div className="md:col-span-2 shadow-2xl w-full p-8 flex flex-col gap-4 bg-black rounded-xl">
        <div className="flex gap-[30px]">
          <img className="object-fit rounded-full" src={patrick} />
          <div>
            <h1 className="font-semibold text-white">Patrick Abrams</h1>
            <span className="font-light text-white">Verified Graduate</span>
          </div>
        </div>
        <p className="font-bold text-white text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil harum,
          temporibus repudiandae accusantium voluptatem, non doloribus quibusdam
          nobis fugit, ab illum quisquam vitae. Voluptate minima corrupti quasi
          dolorum. Aliquam, modi!
        </p>
        <span className="font-semibold text-gray-400 before:content-[''] after:content-['']">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          enim nam sequi magni, quae suscipit nobis. Non, eos? Recusandae ab
          quasi ea rerum quae, earum consequatur? Odio cum dicta voluptatem
          delectus, saepe ea dolore. Cum hic nostrum amet deserunt commodi
          dolorem explicabo rerum magni? Aliquid, dolorum nisi magnam doloremque
          dolores, repellat, similique adipisci id cumque provident harum qui
          quibusdam cum!
        </span>
      </div>
    </div>
  );
};

export default Review;
