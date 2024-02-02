import React, { useContext, useState } from "react";

type SearchContext = {
  destination: string;
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  hotelId: string;
  saveSearchValues: (
    destionation: string,
    checkIn: Date,
    checkOut: Date,
    childCount: number,
    adultCount: number
  ) => void;
};

type SearchContextProviderProps = {
  children: React.ReactNode;
};

const SearchContext = React.createContext<SearchContext | undefined>(undefined);

export const SearchContextProvider = ({
    children
}: SearchContextProviderProps) => {
  const [destination, setDestionation] = useState<string>("");
  const [checkIn, setCheckIn] = useState<Date>(new Date());
  const [checkOut, setCheckOut] = useState<Date>(new Date());
  const [adultCount, setAdultCount] = useState<number>(1);
  const [childCount, setChildCount] = useState<number>(0);
  const [hotelId,setHotelId]= useState<string>("");

  const saveSearchValues = (
    destination: string,
    checkIn: Date,
    checkOut: Date,
    adultCount: number,
    childCount: number,
    hotelId?:string
  ) => {
    setDestionation(destination);
    setCheckIn(checkIn);
    setCheckOut(checkOut);
    setAdultCount(adultCount);
    setChildCount(childCount);
    if(hotelId)
    {
        setHotelId(hotelId);
    }
  };
  return (
    <SearchContext.Provider
      value={{
        destination,
        childCount,
        checkIn,
        checkOut,
        adultCount,
        hotelId,
        saveSearchValues,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () =>{
    const context = useContext(SearchContext)
    return context as SearchContext;
}