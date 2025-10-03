import React, { useState } from "react";
import { Star, Zap, Shield, Users, Clock, Gift } from "lucide-react";
import { useGeoLocation } from "../hooks/useGeoLocation";

// Define the shape of casino data
interface Casino {
   id: string;
  name: string;
  affiliateLink:string,
  location: string;
  rating: number;
  affiliate: string,
  bonus: string,
  category: string,
  description: string,
  features: object,
  imageUrl: string,
  logo: string,
  isCasinoOfTheMonth: boolean
  
}

// Props type for the component
interface CasinoCardProps {
  casino: Casino;
}
 


const CasinoCard: React.FC<CasinoCardProps> = ({ casino }) => {
  const { country } = useGeoLocation();

  return (
    <div className="casino-card glass-dark rounded-2xl p-6 shadow-xl relative overflow-hidden">
      {/* COTM Ribbon */}
      {casino.isCasinoOfTheMonth && (
        <div className="absolute top-4 -right-8 bg-gradient-to-r from-yellow-400 to-yellow-200 text-black font-bold text-xs px-8 py-2 transform rotate-45 shadow-lg z-10">
          COTM
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Casino Info */}
        <div className="lg:col-span-2">
          <div className="flex items-start gap-4 mb-4">
            <img
              src={casino.imageUrl}
              alt={`${casino.name} logo`}
              className="w-16 h-16 rounded-xl border-2 border-yellow-400 shadow-md"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-1">
                {casino.name}
              </h2>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(casino.rating)
                          ? "star-rating fill-current"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-yellow-400 font-bold text-lg">
                    {casino.rating}
                  </span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {casino.description}
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {Object.entries(casino.features).map(([key, value]) => (
              <div key={key} className="glass-effect rounded-lg p-3 text-center">
                <div className="text-yellow-400 mb-1">
                  {key === "games" && <Zap className="h-5 w-5 mx-auto" />}
                  {key === "license" && <Shield className="h-5 w-5 mx-auto" />}
                  {key === "support" && <Users className="h-5 w-5 mx-auto" />}
                  {key === "withdrawal" && <Clock className="h-5 w-5 mx-auto" />}
                </div>
                <p className="text-white font-semibold capitalize text-sm">{key}</p>
                <p className="text-gray-300 text-xs">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bonus & CTA */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-200 rounded-xl p-4 text-center">
            <Gift className="h-6 w-6 text-black mx-auto mb-2" />
            <h3 className="text-black font-bold text-xl mb-1">Welcome Bonus</h3>
            <p className="text-black font-semibold text-md">{casino.bonus}</p>
          </div>

          <div className="space-y-3">
            <button className="glossy-btn w-full text-black font-bold py-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-base">
              Play Now
            </button>
            <button className="glass-effect w-full text-white font-semibold py-3 rounded-full border border-yellow-400 hover:bg-white hover:bg-opacity-10 transition-all duration-300 text-sm">
              Read Full Review
            </button>
          </div>

          <div className="text-center text-gray-400 text-xs">
            <p>18+ | Terms & Conditions Apply</p>
            <p>Gamble Responsibly in {country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasinoCard;
