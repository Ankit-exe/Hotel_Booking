import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypeSection from "./TypeSection";


export type HotelFormData = {
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  pricePerNight: string;
  starRating: number;
  facilities: string[];
  imageFiles: FileList;
  adultCount: number;
  childCount: number;
};

export const ManageHotelForm = () => {

  const formMethod = useForm<HotelFormData>();

  return(
    <FormProvider {...formMethod}>
      <form className="flex flex-col gap-10">
       <DetailsSection />
       <TypeSection />
        
      </form>
    </FormProvider>
  )
};
