const BrandsSlider = () => {
  const brands = [
    "TechFlow", "StyleHub", "FitLife", "CloudSync", "BeautyBox",
    "EcoGreen", "UrbanWear", "FoodieHub", "TravelPro", "PetCare",
    "HomeStyle", "MusicBox", "GameZone", "BookNest", "CraftCo",
  ];

  // Duplicate for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Companies We've <span className="gradient-text">Worked With</span>
        </h2>
      </div>

      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex overflow-hidden">
          <div className="flex animate-slide-left">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 glass-card rounded-2xl px-8 py-6 min-w-[200px] glow-hover"
              >
                <div className="text-2xl font-bold gradient-text whitespace-nowrap">
                  {brand}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSlider;
