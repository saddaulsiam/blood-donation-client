import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BloodDonorList = () => {
  return (
    <section>
      <div className="text-center">
        <h4 className="text-2xl font-bold text-[#101010]">
          Total donors found 82.
        </h4>
        <p className="pt-3 leading-6 text-slate-600">
          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
          Ratione, optio!
        </p>
      </div>

      <div className="mt-14 grid grid-cols-4 gap-x-5">
        <div className="rounded-lg bg-slate-100 p-7">
          <div className="flex justify-center pb-5">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-700">
              Name: Saddaul Siam
            </h4>
            <p className="font-medium text-slate-600">Last Donet: 11-01-2024</p>
            <p className="font-medium text-slate-600">
              Address: Pabna Sodar, Pabna
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-slate-100 p-7">
          <div className="flex justify-center pb-5">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-700">
              Name: Saddaul Siam
            </h4>
            <p className="font-medium text-slate-600">Last Donet: 11-01-2024</p>
            <p className="font-medium text-slate-600">
              Address: Pabna Sodar, Pabna
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-slate-100 p-7">
          <div className="flex justify-center pb-5">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-700">
              Name: Saddaul Siam
            </h4>
            <p className="font-medium text-slate-600">Last Donet: 11-01-2024</p>
            <p className="font-medium text-slate-600">
              Address: Pabna Sodar, Pabna
            </p>
          </div>
        </div>

        <div className="rounded-lg bg-slate-100 p-7">
          <div className="flex justify-center pb-5">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-700">
              Name: Saddaul Siam
            </h4>
            <p className="font-medium text-slate-600">Last Donet: 11-01-2024</p>
            <p className="font-medium text-slate-600">
              Address: Pabna Sodar, Pabna
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BloodDonorList;
