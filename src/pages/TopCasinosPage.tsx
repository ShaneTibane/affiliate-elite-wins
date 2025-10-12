import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Shield, Clock, Award, CheckCircle, AlertTriangle } from 'lucide-react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../firebase";
import CasinoCard from '../components/CasinoCard';

const TopCasinosPage = () => {
  type Casino = {
  id: string;
  name: string;
  affiliateLink: string,
  location: string;
  rating: number;
  affiliate: string,
  bonus: string,
  category: string,
  description: string,
  features: {
    games: string;
    support: string;
    withdrawal: string;
    license: string;
    features: string;
    freespins: string;
    wagering:string;
    mindeposit:string
  };
   extraFeatures: {
    freespins: string;
    wagering:string;
    mindeposit:string
  };
  imageUrl: string,
  logo: string,
  isCasinoOfTheMonth: boolean,
  highlight: boolean,
  games: string,
  payoutTime: string,
  isCasinoActive: boolean




}
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
 const [testcasinos, setTestCasinos] = useState<Casino[]>([]);
   useEffect(() => {
     async function fetchData() {
       setLoading(true);
       try {
         const querySnapshot = await getDocs(collection(db, "casinocards"));
         let data: Casino[] = querySnapshot.docs.map(doc => ({
           id: doc.id,
           ...(doc.data() as Omit<Casino, "id">), // cast doc.data()
         })); 
          data = data.sort((a, b) => {
         // Move the one with isCasinoOfTheMonth true to the top
         if (a.isCasinoOfTheMonth && !b.isCasinoOfTheMonth) return -1;
         if (!a.isCasinoOfTheMonth && b.isCasinoOfTheMonth) return 1;
         return 0;
       });
         console.log("DATA 2",data)
         setTestCasinos(data);
       } catch (err) {
         console.error('Error fetching posts:', err);
       } finally {
         setLoading(false);
       }
 
     }
     fetchData();
   }, []);
   console.log("DATA:::", testcasinos)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const casinos = [
    {
      play_now:"https://www.playojo.com/en/",
      name: "PlayOJO",
      description: "Transparent, no-wagering bonuses. Licensed in Malta, available in Canada. Known for fair play and responsible gaming tools.",
      trustScore: 5,
      license: "Malta",
      mobileExperience: "Excellent",
      paymentSpeed: "Fast",
      logo: "https://play-lh.googleusercontent.com/YbX_ewsaO5C4ZcJQUeWN4D1yPMWt2E-dpM952LGGbxUPXA6wrSBjqdzs09sqtzSLTM8",
      features: [
        "No wagering requirements on bonuses",
        "Malta Gaming Authority licensed",
        "Excellent responsible gaming tools",
        "Full game transparency"
      ]
    },
    {
      play_now:"https://www.jackpotcity.ca/",
      name: "JackpotCity",
      description: "Established since 1998, strong player reputation. Licensed by MGA. Fast withdrawals and great slot variety.",
      trustScore: 4,
      license: "Malta",
      mobileExperience: "Good",
      paymentSpeed: "Fast",
      logo: "data:image/png;base64,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",
      features: [
        "Operating since 1998",
        "Excellent slot game variety",
        "Fast and reliable withdrawals",
        "24/7 customer support"
      ]
    },
    {
      play_now:"https://www.spincasino.com/",
      name: "Spin Casino",
      description: "Offers Microgaming and NetEnt titles. Secure banking and 24/7 support. Licensed and popular in Canada.",
      trustScore: 4,
      license: "Malta",
      mobileExperience: "Excellent",
      paymentSpeed: "Moderate",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABUFBMVEUMFl3nGVn////uOj3vOzrvOD3sL0XsLkcAFV3wOTsAFlzrKUvpIVLoH1PtM0HuNj7qJk7vPjgAE18AAFPvQjLvRSzpJE/vRyrrJ0zvPTgAAFHvRDDwRiwAAFZKHlYmGVkjFlzuGVjvSyUSHGMADFqRGFqdLEr3PDqvscU9RHje4OjjOTxuJFGtMEcAAEudKE5kIFStOzhlKE3s7fOVmLHTLUfmM0KtNUG4MkVwIFVkH1XT1N8yOHCfGFqpGFmzGFndGVh/F1tIF1vTGVm8vszl5+4iKWeZIlLDJ02RIFRbHVezIFP3JU3SJE85GFp+IFNnF1uTKUy/GFnONEJ+Jk5YHlVBHVa0Jk7gK0iGGFvFKkrFM0MzG1hQF1vGIFKQJlDXPDqkMkTDOTyOLkfcQy95LEpXJk9KIlJydZljZo6NkKxPVIJ+gaFITX2ipboAAEGxUIS5AAAQ3ElEQVR4nO2c+1caSRbHUbApWgXSbQiiRIgkqEnQDerGgG80EyVozENjxkl2Z3fWV5z//7etV1fXC2i7zck5OfU9TmIEuuvT99ate2+VE4sZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRn9EIGYbf/sMfxQgdcnb6fAzx7FDxSYbyet+V+YELy2ksnkb78uIQQchoRLvywhBUwmf/ZA7k5i1ARvkgTQ2vpVoinodAAS4XHetAlg0tr7RdwU7Lfbubf7b151bIjpvKEuCgkPfg1CeyufhcoPt/PZt/sH+0km69j52YO7G4FRTJgfhkryspZ+MiGcOEjwT4C/DX2dlTbkw4Aio5X8mYSQqHP4eXUNanX18ebh2VYphoG599BH4Ik8BxxTxPllv9UCJq20fzXgAEGOeA2HCL2A/47OBw7XN8qiBja2j1Y3t3xI+/NjvTYPOyxy4tG/anuAHKFlWekVz4j2h3lBT57MC1nruyeCnkU0vm1/hngDGiHS7TX6rqOyopHR8ghULjvydu3QZmZw3moBob7G8JMAx9V0BmkIKpWCX6nqU58QvK+mmKpIHyIhgsMNLR7DXMXmKamvjFIhyFx2dK1DDQn22socxEqnrXdTjh1zltNUGU9D1WcM0X6ailMlEolUKpF6HsVP7dWefJBwHV3eVgk5QISYy2bXqEuD35I6CyLGzPK87VDCTIYRQlN+YXayn1K8OOJLpeLV5xFsaK/3ARwoP8aOpRDyFkRfkDCf28IPG5y1NRZENsSat5ep/dIeX3xoqDrFZvzT+BBlxICRCPsDDpQ/ozsrNhQAc+gLr4IkMwPHSQ2gR5iRTYgJU+88V2Q2xC6aiEQIHvcFHCgfarx0VAKEfIgwOzx8ht4NptrdAaUZCAHjcRRyljkb+i6aQN+HJrTP+gMOlLd6EFIX9QDRQojH6fzWDzAtGBCpugAEG1IXjUexIdjuDzgwUFK9VLEg5sOpWhs3K+w+gCphPJ566fCEnotGIbQ3A5hwYEMhHFUt6BkQRdCODWtCqwcgBkuLLgo5UnG66hMv9Vw0EuFGEBNuY7fTEXJRlJQTZBXcB/ZUlyiK+Ybef1xWXBSDfPUJfReNQAgOg5hQJdS7aD7LUrUpZ9/qasHM0gJwljOyiyKlvjkeIeeikDYsoX0UBJAs+H5O09tFkayVqa4umoJ8IMYIfRcltvoECGGKc9EIhLEggF7SZsuE/jLhl4PES63jeUsPmPmygOsESui5qEfixRpCyH6aCEtoB3NSktIwQsWCEiEiO+liwcw8Tc5FwjgnHGsQoe+iifCEAVZ7RLjJEfZ10R6ZTDo99Dtd0wmh5KLYTXERgQnjd0DYP2HDhIeAEo7yFsxxLprN6utBJYp643SWh0jlJBCiJfE9JozzLhqeUL/c0/KX+wGN4CXZRXEik4Pmy3a3ICyXOMITnlCZhGQmolhjx3kXjWBDLeD65uHh5ur6NuOkhKi2kF00u18q7XEtC8mCiOn0hCM85QiHND6KctEnDl8fRiTUOCmsI2gTxt76vL6NLHpkUxuqyXYbVrzAzqmAVto6OZ0/eIi6OKe+k84LhCKftyQ+hQUysyEFTIyHq4B1hAMd1m5BTabS4epqSSbklglcRrxWXXTp4ZRNG1Q2OM14a+Er1uZYlgEpUSpVXXA8wgRTNRShHetNSCghZ0wk5JcJjKBpWSxxnTNgL1HEoYeM8KkGkJZLX4BCOB52xdcRHpW6NEo9QiGKYsIpmdCyhH00G2BEmGuzIl4m5Cv66u+AEPqA4/dC9ml0hOWNzzEtIiUUF3qyjiSVKCruFNrYipkMq3ApoeKjKBeNV985NranDzgezkv18xAxPtY1vAmhUE3kCSFIKlFU2gsFsaUhWC35rSZMKLmoVy6hWMMTQsB7dxhLCePA45KCiAm9rhrNZIYdj1BaB5fwx7keOXgPV/jngJ+HWhdFf1c/2oIF7927NxbSht0LfGhH2VcRoVAu5bPZYWpDZaHHNgRflznhmvcJ8AhTcVGs6YQKCfBUsCAk/Ge4nOaomxHJfLTFyVSSXTRPbWgrgJSwqnQsaHWEbKhOQZqLwrXBJySA96rhCPtk3uWNM96Mdkkol/I4kyH3VQDT6NSFPeWtg35TrfpQJpRclPzjZXycc9HwNuxbPcHK0GdEhHxFj1M1nCZ3LAnQSqPkxZ4aCkDIRVE/Fx0XLRiasH8FXN72I45dyvnlUp7moui+YEVtOs0Dn5Bv3fuEwjxMiBV9QgYMTQj6N/RHt1gfusQ3nUi5hHc8wbHUk4FUH3wbcn3fIZlQ56LCQn8vImHffvAorCbOWNbmt+69cqm9BXPPPU3TaQ8EIpSiqMDHLDg2Br/CemnfVhRa5FnmnVMr+pP5r7IFEWCGZHMpfvMF1YNxhZBv3Xdx0TGoibCEoNPbiDhP2/YqYFbR8wWvpQJaaXwiARHyBoxLNgzmomPRCPvsHdJU2+tECVG0Z0/m2CdMdyUM5KLEhBEIYV7THZECjo7Qrj7ZfOla0fuAmY/ES6vc3gQp6EVC5qIKIZuDBDASYalrY98veNfI3pPqonrA9AkpOSChsrvECANH0aiECFFvRa6iH7U9wnwAC6YzXz1CZXdJJOzromOe7kcghCPXOarQk8ke2j5h/74oLQN9G/o9J44wYBQlJoxECOtTzcIv9GSyyE3tUj5YX3RoBQiEXltUIhRcNJHQWNBHnJiMRIi2EQfK3S0IV/k/CGEgC2a8lqFP6HcNeRvyLorAaDaqWnBsIjIhHP0a3wSWAEdybYD6pcEAl9hFCSHti8ZlQmF3KZF4+aQqBhmO7w4IoaeW1n1GtS86ZWMb9g0y0IKsjieEYl+UWy2EKJqqvpwa7+aid0KIGmKddeKr6uZLDh0hsUsqnxJFYdnkH2xChNLukkDIR9Hqy8qXcT4X5U14//5dECI7biE7anaXcvkVPaG00GeOO9xAEKHgogohF0XHXzofqxoXJYD3H9wJIWY8Kuu2z/IHHKEESLdeMstfvk4JpyQhIb9HrxCK22cvHfBtXCGcIIB3RogYN+U5iBDbHKEIeLIEdXo8f/CxBByxd+UTxjWECXHvBRI676qKj1LAKIS23Bq192QXzRJCUNLMwdMYPuMKhOOlPqGyfcYRxiVCeAdlofcAJ8MT2ptHj8+AzXfVwNGIvMObHWbzUARMr/RoYyIbyrtLKmGC2TDmPK8KiAwwAqG9VR4olzfWNzvodLdPKJ90atNYKkfRAIRxQXL1xBIZRAh+V0yI8e5PTj74R7QzUfggMKJE1uzgxrZwyiLf7iDCpAwYgFAETMg2FAhjzpcx1YKTkO9BVEJKObq9v7a6PiIdI8GEOKdR18FbEMpZm7x9hgjBwpgSRQnho7CE/NlLViqJu0s4VctKhFZQwrgkgVBItvFBGvBNBbyPTBiakK8qpHVwBEdRmmzjFnZJAbQyfQhlwISeEC4ShND5U14m7mMfjUB4JPNpz8kkXwuEXCYTkJA1nXhCoaIfIzYEkzoLRiHc1gKK50Uh4R5PyKdqt7JhQiCU6kFy3Mv514QYZAhghHkoEwoLPasH86RPozmrdhtCVPBqCOn2GT3Q9knjog8ePQpNGEOEo7wFczkxxmAT7hNCMcjgZDQIobBHrxB6iRo9Huz8e0KMogQwPOGGZMGcn4ty9W7HZoTW7QmZi6I9epmQFfSUEDyblOdgFELaSlTmIHZR1jakv4KNvVSuBwMT0r6oTyi3LLwj3uCbxoKhCUFJDyj1RUu05602nfoTSq17zobjYsvCI3T+nJxQAUPbcEsueP09egZovfH2LSzr9oRebkbLQZFwXEMYsyd5wKiEZ+UuUZSz4CmFACUFkDUOexGy311KyIRCwcsInX9OqoChCQ/LUpAZUVx0yT/1JfMFtSHXF+Ujjdi6Z4Tg0+SkAhiacHOEB/QmId+5X/J/vzIsId8X5W0o7J9NMEK4YDxQACPbUHLRrAdoHfu1sUeYvg0hO+mkEHKNX4kQvHg0KfGFXw/tNXLKiTZ+JRdNnrziW2clmS+dTvUiBNiGeBKyiMMIv0lNpwn/RFjM+Y9swQgrvh3be/zH6Eg2m8v5qcwwzraTSwfikSEwTw3H9sxSyz3PYjnvq7K+eS99QP9iWfbE5MRf3HHN/z5S9FfPO/VERD2arZU3+29z+Xa7Df8bhn+1h9++foia1+L/32LvFdHCqwX0tbAQ631fsPBMEvuA8/AZusDCC6xnLz7xNnL+90LSp7AmZJi4WdY521tZOThYWTmb0vXOUHEjqd+Fe3xA/l118XOOpNAWlMdDf7nevqMLGhkZBRMouoVareAWu809+AbXLVa6XsB1C4VaQX8BB362qP64Aq/o+N93ubVTJBfufutAcsF5a65en2udVzRDQSqez7Ral80u96m4FzONnfpOY+ZcfQpgerE1c+4qn2nOtG52ybvdq5nWpe7awJ2+RiNr3FwVIjCCwnV9kKp+oQwFqTBDXp3WrkjF5pz3+cGdWXkkhRb6+YX86Gp1dsHKLHrHjXpnp7jILtxoakcWSG5rkJMyFHSnXfritc7ElWad+3y9Iq1qYFA3/kqTjLuGBoA5GgUVcI4f2bnyhoAqCICDOxoI95K+OFfTXKDWEC5wIRrRmcY/nZEJZ8m7Z+CwiaXmFBu5AqD+4QdQ8Vy8TH1anfI1ZiTFB9E8I09m8foGj0jy5D6Eg3BadCF0FwdF1cMRFqgFLmd3L9AIG6q7V67w9dEfLfVV9wJ/vlmD8fhqbvBcGkY/wsHdip4QFMlzbVztzlJW7STpJ+CQDzcLFaf4d2OwoYnaxI+JrXeVWFMghDezTgHG/yv5EfQlnCu4WsLiNX65VXOdSoHcXPP0+4teZ6ZARtN0VUAQw2GviDkvlcfIwtDg3M13VxlDX8LBmZqWkAZABz/SWovMoBDVhUvWge9kfgHdokMeQquGn6Mm1tS4gNCYvbUNoXdc6gjJ9IH3Q/UNjRbNEIR0pVOdTyb4Xqzhd14oMZsfLByuNNDehDP+nwrhDn5k5HaFq9CE7o1gQ80VyMpV351ttnx/FlRs8gvO7m1i6bS/0nS1Ib7FRWhCOg8X8bhBrKkmR3LQ1qUehe+LbKiL4kztTdiMsYWoyzwkka9GXS1EzQqK9MnDEFOB83lOyT1rIuDgtYxYaX4voMx790bH0ofQvepGyGJpBTjUSUPFUm89rF9MO7Poqc1JwVLOCJQ3oHXrslgoFgtuCEKn4LmIsh5WiHlbzdg0HYMayIOIEdSpv0hpC03qdupI+Nsr8Q3Yi+sz1xfXjRBeWqELgSanKdx4I/MebtfirrdqYl5aFxs+DsmQb/6uQX0nD1WMNVJeO9i8TV4K3+wUd/SEgL7AJKdLgeUKmbOUGRUvOcPSW4rRks4XT5eys8W0hPTJoeDoftcTxiq79V5XDi6HuQMClBYDsprQdJTGbMmPaZyjw1AWEzLRlZQSB7Ad/O7Cte4ZIMSYf+m6kg/eRu70ZaMOJ2JjcVotYa4bOzfesN2Lxs5MUx5sYfamgaep7vMwq2s1Gurzr3xvNVrUowvnjcaNJl+ED393EV16p3VRiAIIr+S6ld3pit844VR0i67wD/U98IOV6enpovbz6OL9+jSoC9SlT4MujW4bgKKPgnSve3/8R/2vZaMNzMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyOgX1f8BzFUEehgaWvYAAAAASUVORK5CYII=",
      features: [
        "Premium Microgaming games",
        "NetEnt exclusive titles",
        "Bank-level SSL encryption",
        "Around the clock support"
      ]
    },
    {
      play_now:"https://www.royalvegas.ca/",
      name: "Royal Vegas",
      description: "Long-running online casino with top-tier SSL protection. Kahnawake licensed, reliable payouts. Excellent mobile platform.",
      trustScore: 4,
      license: "Kahnawake",
      mobileExperience: "Very Good",
      paymentSpeed: "Fast",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAB4FBMVEX////DLC/9//////3//f////zFKy/7///ELi7//v3BLS///f7///rFLC3BLS3///fQiYv78eT///Ltxiv//+7m5ubPz8/39/eSkpLxzS/o0Vu6Hh/x8fHz0jL43ECshjG6urrHx8ewsLD8x0T9+eK6PULa2tqhoaFxcXH/9vi8KyH2rUC4MC353uHVnZ6enp7qpzDdiS21jSX/8u9ra2vx54K7OCLQgoH1ysqxiUD22Nq4IRyJiYn//dnswzH+/tHsubrvuinduDf/8/nyuj7fg4OqghuhAAD75d64QEnuwcO+HRv20syxAADjrKzFU1n99Lrk0G3t35LhzUH17qnn1Irz7cvqxU/26JTzxSXt2m3exUPz4abZuiby6rjKsoHOpy717Zzv3MPImzC5mGbpvx7x4mPHsFbc0KmskkfgxmuukiW7qXb21Ezs37bGp2rUoCGmdxXXwEOskjbawaPXriDQvIejeTGwi03//8m9mRj82kP58Jq5n0vUfDXLZi3EUif61lzz6HHsqRzEWWC1LTnlhTjTeXXKYXTcliuvNTLirbrVh5PexF3RcGe+Z13Wr0+/eHCSAADYqZrsnJvSfIvXX2CsPUf3rLLijYXZnYqbGhzIlpqvFjLjuse0U12JSr+pAAAdUElEQVR4nO1di18TV74/mWfmmfA2HnmIBEycxMe0JE0kBiIQkjCRilSpD6pll+4uuuzW2squeO9Nmja1ertLW717t/1X7+93JkBAemXvrSX2M9+PwjjP8z2/9zlnRkI8ePDgwYMHDx48ePDgwYMHDx48ePDgwYMHDx48ePDQguC4w27B6wXHcbwsC5p22A15feBkWdTbBeGw2/H6wMk6uTQ3dtjNeJ0QlbGjobfbCeEPuyWvDUNHe0O977br4q+Von69FxhevkC4XyvDsdUQYq5d/pV6G2U+FOqAP6tj/K+UIf8uYxgKjYnKYbfl9UB5t8NluMD/Su1QucL4hW4sKCDDX50YucCFd99rMJybH1O0X50cA1czvZlQAx3vXxKEX1t+egkioWuF8PvataNDb7I7VXi+YWRi59hQO9tBrkKw35JgR0foxk1FhxP4zqEh/VAb+38Bz7sMoRgcW+xb/Uu7TESX4TZHsMXPNJHgCTfevx6A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",
      features: [
        "Industry-leading SSL protection",
        "Kahnawake Gaming Commission",
        "Reliable payout history",
        "Award-winning mobile app"
      ]
    },
    {
      play_now:"https://www.leovegas.com/en-ca/",
      name: "LeoVegas",
      description: "Known for its mobile-first approach. MGA and Ontario-licensed. Strong responsible gaming program.",
      trustScore: 5,
      license: "Ontario, Malta",
      mobileExperience: "Excellent", 
      paymentSpeed: "Very Fast",
      logo: "data:image/jpeg;base64,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",
      features: [
        "Mobile-optimized platform",
        "Dual licensing (MGA + Ontario)",
        "Comprehensive responsible gaming",
        "Fast payout processing"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is the safest online casino in Canada?",
      answer: "The safest online casinos in Canada are those licensed by reputable authorities like the Malta Gaming Authority, Ontario's iGaming regulator, or the Kahnawake Gaming Commission. PlayOJO and LeoVegas top our list due to their transparency, licensing credentials, and strong responsible gaming programs. Always verify a casino's license before playing."
    },
    {
      question: "Are offshore casinos legal in Canada?",
      answer: "Canadian federal law does not explicitly prohibit individuals from playing at offshore online casinos. However, provincial regulations vary. Ontario has its own regulated market through iGaming Ontario, where only licensed operators can legally offer services to Ontario residents. For other provinces, many players access international casinos, though these operate in a legal grey area. Always check your local regulations and play responsibly."
    },
    {
      question: "How can I verify a casino license?",
      answer: "To verify a casino's license, scroll to the bottom of their website where license information is typically displayed. Click on the license seal or number to be redirected to the regulator's website. You can also visit the licensing authority's official website (such as mga.org.mt for Malta licenses) and search their database for the casino's registration. Legitimate casinos will always display their license prominently and provide verification links."
    },
    {
      question: "What payment options are safest?",
      answer: "The safest payment options for Canadian players include e-wallets like PayPal, Skrill, and Neteller, which add an extra layer of security between your bank and the casino. Credit and debit cards from major providers (Visa, Mastercard) are also secure when used at licensed casinos with SSL encryption. For maximum privacy, cryptocurrencies like Bitcoin offer anonymity, while prepaid cards like Paysafecard allow deposits without sharing banking details."
    }
  ];

  const renderStars = (score: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < score
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-600'
        }`}
      />
    ));
  };


  return (
    <>
      <Helmet>
        <title>Top 5 Most Trusted Online Casinos in Canada (2025)</title>
        <meta
          name="description"
          content="Discover the top 5 most trusted online casinos in Canada for 2025. Learn which casinos are safe, licensed, and fair for Canadian players."
        />
      </Helmet>

      <main className="pt-20 min-h-screen">
        {/* Header Section */}
        

  <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800"></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 floating-animation"></div>
          <div className="absolute bottom-32 right-16 w-16 h-16 bg-purple-500 rounded-full opacity-30 floating-animation" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-20 w-12 h-12 bg-blue-500 rounded-full opacity-25 floating-animation" style={{ animationDelay: '4s' }}></div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">

               Top 5 Most Trusted Online Casinos in Canada (2025)
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              When choosing an online casino in Canada, trust and licensing are paramount. A licensed casino ensures fair play, secure transactions, and regulatory oversight to protect your rights as a player. This guide highlights the most trusted online casinos that Canadian players can confidently enjoy in 2025.
            </p>
            
          </div>
        </section>

      {/* Loading State */}
          {loading && (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
              <p className="text-gray-300 mt-4">Loading Casinos...</p>
            </div>
          )}

        {/* How We Ranked Section */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white bg-opacity-5 rounded-2xl p-8 shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-white">
                How We Ranked These Casinos
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our ranking methodology is based on rigorous testing and evaluation across multiple criteria to ensure we recommend only the safest and most reliable casinos:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-2">Licensing & Regulation</h3>
                    <p className="text-gray-300 text-sm">Valid licenses from Ontario iGaming, Malta Gaming Authority, or Kahnawake Gaming Commission</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-2">Security & Fairness</h3>
                    <p className="text-gray-300 text-sm">SSL encryption, certified RNG (Random Number Generator), and third-party audits</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-2">Payment Reliability</h3>
                    <p className="text-gray-300 text-sm">Fast withdrawals, multiple payment options, and transparent fee structures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-bold mb-2">Player Reputation</h3>
                    <p className="text-gray-300 text-sm">Positive reviews, responsible gambling tools, and excellent customer support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Casinos Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
              The Top 5 Most Trusted Casinos
            </h2>
            <div className="max-w-5xl mx-auto space-y-8">
                {testcasinos.map((casino) => (
              <CasinoCard key={casino.id} casino={casino} />
            ))}
              
          {/* Casino Cards */}
          
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Casino Comparison Table
              </h2>

              {/* Desktop Table */}
              <div className="hidden lg:block bg-white bg-opacity-5 rounded-2xl p-6 shadow-md overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-yellow-400/30">
                      <th className="text-left py-4 px-4 text-yellow-400 font-bold">Casino</th>
                      <th className="text-center py-4 px-4 text-yellow-400 font-bold">License</th>
                      <th className="text-center py-4 px-4 text-yellow-400 font-bold">Mobile Experience</th>
                      <th className="text-center py-4 px-4 text-yellow-400 font-bold">Payment Speed</th>
                      <th className="text-center py-4 px-4 text-yellow-400 font-bold">Trust Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {testcasinos.map((casino, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-700 hover:bg-white hover:bg-opacity-5 transition-all duration-300"
                      >
                        <td className="py-4 px-4 text-white font-semibold">{casino.name}</td>
                        <td className="py-4 px-4 text-center text-gray-300">{casino.features.license}</td>
                        <td className="py-4 px-4 text-center text-gray-300">{casino.bonus}</td>
                        <td className="py-4 px-4 text-center text-gray-300">{casino.features.withdrawal}</td>
                        <td className="py-4 px-4">
                          <div className="flex items-center justify-center gap-1">
                            {renderStars(casino.rating)}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-4">
                {casinos.map((casino, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-5 rounded-xl p-4 shadow-md"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{casino.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">License:</span>
                        <span className="text-white">{casino.license}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Mobile:</span>
                        <span className="text-white">{casino.mobileExperience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Payment Speed:</span>
                        <span className="text-white">{casino.paymentSpeed}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Trust Score:</span>
                        <div className="flex gap-1">
                          {renderStars(casino.trustScore)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white bg-opacity-5 rounded-2xl p-8 shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-white">
                How to Choose a Safe Casino
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Selecting a safe and trustworthy online casino requires careful consideration. Use this checklist to ensure you're playing at a legitimate and secure site:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Verify License Details",
                    description: "Check the casino's footer for license information and verify it on the regulator's official website"
                  },
                  {
                    title: "Look for SSL Encryption",
                    description: "Ensure the website uses HTTPS (look for the padlock icon in your browser's address bar)"
                  },
                  {
                    title: "Read Player Reviews",
                    description: "Research player experiences on independent review sites and gambling forums"
                  },
                  {
                    title: "Use Responsible Gambling Tools",
                    description: "Confirm the casino offers deposit limits, self-exclusion, and reality check features"
                  },
                  {
                    title: "Avoid Unclear Withdrawal Terms",
                    description: "Steer clear of casinos with hidden fees, unrealistic wagering requirements, or vague payout policies"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white bg-opacity-5 rounded-lg p-4">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-white font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final Thoughts Section */}
        <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white bg-opacity-5 rounded-2xl p-8 shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Final Thoughts
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Playing at trusted online casinos is essential for a safe and enjoyable gaming experience. The five casinos listed above represent the best of what's available to Canadian players in 2025, combining strong licensing credentials, secure platforms, and player-focused features.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Remember to always gamble responsibly. Set limits, take breaks, and never wager more than you can afford to lose. If you or someone you know is struggling with gambling, resources like the Canadian Centre on Substance Use and Addiction (CCSA) are available to help.
              </p>
              <div className="bg-gradient-to-r from-yellow-400/20 to-yellow-200/20 border border-yellow-400/30 rounded-xl p-6 text-center">
                <p className="text-yellow-400 font-bold text-lg mb-2">Coming Soon</p>
                <p className="text-white">
                  Compare casino bonuses and exclusive offers from verified Canadian partners
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <div className="bg-white bg-opacity-5 rounded-2xl p-6 shadow-md">
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-700 last:border-b-0">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left py-4 flex items-center justify-between hover:text-yellow-400 transition-colors duration-300"
                      >
                        <h3 className="text-lg font-bold text-white pr-4">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0">
                          {openFAQ === index ? (
                            <span className="text-yellow-400 text-2xl">−</span>
                          ) : (
                            <span className="text-gray-400 text-2xl">+</span>
                          )}
                        </div>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openFAQ === index ? 'max-h-96 pb-4' : 'max-h-0'
                        }`}
                      >
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsibility Statement */}
        <section className="py-8 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <AlertTriangle className="h-5 w-5 text-yellow-400" />
                <p className="text-gray-300 text-sm">
                  Gambling involves risk. Play responsibly. Must be 19+ in Ontario or 18+ elsewhere in Canada.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default TopCasinosPage;
