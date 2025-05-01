export interface CategoryDetails {
    description: string;
    benefits: string[];
    careInstructions: string;
}
  
export interface ColorOption {
    name: string;
    image: string;
}

export const categoryDetails: { [key: string]: CategoryDetails } = {
    "Sheerweave 4300": {
      description:
        "Sheerweave 4300, with its revolutionary half basketweave (2x1) design, leverages DOW ECOLIBRIUM bio-based plasticizers, offering a sustainable, high-performance sunscreen solution. It significantly reduces environmental impact without compromising on quality or aesthetics, free from the traditional PVC smell.",
      benefits: [
        "Eco-friendly DOW ECOLIBRIUM bio-based plasticizers enhance sustainability.",
        "Preserves fabric performance and aesthetic appeal, free from PVC odor.",
        "High UV blockage of approximately 97%, ensuring effective sun protection.",
      ],
      careInstructions:
        "Regular dusting or vacuuming is recommended. For spot cleaning, use water and mild detergent. Ensure the fabric is dry before rolling up.",
    },
    "Sheerweave 4500": {
      description:
        "Sheerweave 4500 presents an innovative half basketweave (2x2) sunscreen crafted with DOW ECOLIBRIUM bio-based plasticizers. This product stands out as a green alternative to conventional sunscreens by maintaining excellent performance and appearance while eliminating the PVC smell.",
      benefits: [
        "Utilizes bio-based plasticizers for a greener environmental footprint.",
        "Retains fabric's functional and visual quality without PVC emissions.",
        "Achieves substantial UV blockage, offering robust sun protection.",
      ],
      careInstructions:
        "Dust or vacuum regularly. Clean with water and mild detergent for stains. Do not roll up damp fabric.",
    },
    "Sheerweave 4510": {
      description:
        "Sheerweave 4510 is a groundbreaking 2x2 sunscreen integrating DOW ECOLIBRIUM bio-based plasticizers. This evolution in sunscreen technology delivers unmatched performance and sustainability, all while offering an appealing aesthetic without the odor commonly associated with PVC materials.",
      benefits: [
        "Incorporates sustainable bio-based plasticizers, reducing reliance on fossil fuels.",
        "Maintains superior sunscreen efficacy and visual appeal without PVC smell.",
        "Provides excellent UV protection with a blockage rate of 95%.",
      ],
      careInstructions:
        "Maintain by regular dusting or vacuuming. For spots, use water and a mild detergent. Avoid rolling up when wet.",
    },
    "Duo Screen": {
      description:
        "Duo Screen fabrics offer a versatile solution for window coverings, blending functionality with aesthetic appeal. These fabrics are designed for dual light control, allowing for transparency or privacy depending on the need, with a unique layering of fabrics for optimal sunlight management.",
      benefits: [
        "Versatile light control for both transparency and privacy",
        "Optimal sunlight management through unique fabric layering",
        "Aesthetic appeal with a range of textures and colors",
      ],
      careInstructions:
        "Regular dusting and gentle cleaning with a damp cloth; avoid harsh chemicals.",
    },
    "Aventus 3%": {
      description:
        "Aventus 3% fabric is designed for roller and panel window blinds, suitable for wide width windows. It features a 2x2 basketweave composition with PVC coated polyester base, highlighting an openness factor of approximately 3%. The fabric is notable for its use of DOW ECOLIBRIUM bio-based plasticizers, offering a sustainable alternative without compromising on quality or performance.",
      benefits: [
        "Sustainable material choice with bio-based plasticizers",
        "High performance with approximately 97% UV blockage",
        "Accredited for low chemical emissions, suitable for sensitive areas",
      ],
      careInstructions:
        "Regular dusting or vacuuming as appropriate, with mild detergent cleaning.",
    },
    "Aventus 5%": {
      description:
        "Similar to the 3% variant, the Aventus 5% fabric extends the openness to approximately 5%, balancing light control and visibility. It maintains the same high standards of eco-friendliness and user safety, incorporating bio-based plasticizers and ensuring minimal environmental impact.",
      benefits: [
        "Enhanced light filtration with a slightly higher openness factor",
        "Maintains eco-friendly characteristics and user safety standards",
        "Suitable for larger window installations with its wide-width capability",
      ],
      careInstructions:
        "Similar care instructions as the 3% variant, focusing on gentle cleaning and proper maintenance.",
    },
    "Aventus 10%": {
      description:
        "Offering the highest openness factor among the series, Aventus 10% fabric allows more light while still providing effective sun protection. This variant is ideal for spaces requiring more natural light without sacrificing the benefits of solar shading.",
      benefits: [
        "Maximum natural light penetration with effective UV protection",
        "Stays true to the sustainable and health-conscious approach of the Aventus series",
        "Ideal for wide-width window applications, providing both aesthetic and functional advantages",
      ],
      careInstructions:
        "Care involves regular dusting and mild detergent cleaning, ensuring the fabric is dry before rolling up.",
    },
};
  
export const colorPalette: { [key: string]: ColorOption[] } = {
    sheerweave4300: [
        { name: "White", image: "/image/curtin/Sheerweave4300/white.jpeg" },
        {
        name: "White Stone",
        image: "/image/curtin/Sheerweave4300/white-stone.jpeg",
        },
        { name: "Sandstone", image: "/image/curtin/Sheerweave4300/sandstone.jpeg" },
        {
        name: "Slate Stone",
        image: "/image/curtin/Sheerweave4300/slate-stone.jpeg",
        },
        {
        name: "Charcoal Gold",
        image: "/image/curtin/Sheerweave4300/charcoal-gold.jpeg",
        },
        { name: "Charcoal", image: "/image/curtin/Sheerweave4300/charcoal.jpeg" },
    ],
    sheerweave4500: [
        { name: "Ice", image: "/image/curtin/Sheerweave4500/ice.jpeg" },
        { name: "White", image: "/image/curtin/Sheerweave4500/white.jpeg" },
        {
        name: "White Stone",
        image: "/image/curtin/Sheerweave4500/white-stone.jpeg",
        },
        {
        name: "White Linen",
        image: "/image/curtin/Sheerweave4500/white-linen.jpeg",
        },
        { name: "Sandstone", image: "/image/curtin/Sheerweave4500/sandstone.jpeg" },
        { name: "Linen", image: "/image/curtin/Sheerweave4500/linen.jpeg" },
        {
        name: "White Grey",
        image: "/image/curtin/Sheerweave4500/white-grey.jpeg",
        },
        {
        name: "Charcoal Grey",
        image: "/image/curtin/Sheerweave4500/charcoal-grey.jpeg",
        },
        {
        name: "Charcoal Gold",
        image: "/image/curtin/Sheerweave4500/charcoal-gold.jpeg",
        },
        {
        name: "Charcoal Bronze",
        image: "/image/curtin/Sheerweave4500/charcoal-bronze.jpeg",
        },
        { name: "Charcoal", image: "/image/curtin/Sheerweave4500/charcoal.jpeg" },
    ],
    sheerweave4510: [
        { name: "White", image: "/image/curtin/Sheerweave4510/white.jpeg" },
        {
        name: "White Stone",
        image: "/image/curtin/Sheerweave4510/white-stone.jpeg",
        },
        {
        name: "White Linen",
        image: "/image/curtin/Sheerweave4510/white-linen.jpeg",
        },
        {
        name: "White Grey",
        image: "/image/curtin/Sheerweave4510/white-grey.jpeg",
        },
        {
        name: "Charcoal Grey",
        image: "/image/curtin/Sheerweave4510/charcoal-grey.jpeg",
        },
        { name: "Charcoal", image: "/image/curtin/Sheerweave4510/charcoal.jpeg" },
    ],
    duoScreen: [
        { name: "White", image: "/image/curtin/DuoScreen/white.jpeg" },
        { name: "White Stone", image: "/image/curtin/DuoScreen/white-stone.jpeg" },
        { name: "White Linen", image: "/image/curtin/DuoScreen/white-linen.jpeg" },
        { name: "Dune Grey", image: "/image/curtin/DuoScreen/dune-grey.jpeg" },
        { name: "White Grey", image: "/image/curtin/DuoScreen/white-grey.jpeg" },
        { name: "Blue Grey", image: "/image/curtin/DuoScreen/blue-grey.jpeg" },
        {
        name: "Charcoal Grey",
        image: "/image/curtin/DuoScreen/charcoal-grey.jpeg",
        },
        {
        name: "Charcoal Slate",
        image: "/image/curtin/DuoScreen/charcoal-slate.jpeg",
        },
        { name: "Charcoal", image: "/image/curtin/DuoScreen/charcoal.jpeg" },
    ],
    aventus3: [
        { name: "Ice", image: "/image/curtin/Aventus3/ice.jpeg" },
        { name: "White", image: "/image/curtin/Aventus3/white.jpeg" },
        { name: "White Linen", image: "/image/curtin/Aventus3/white-linen.jpeg" },
        { name: "White Stone", image: "/image/curtin/Aventus3/white-stone.jpeg" },
        { name: "White Grey", image: "/image/curtin/Aventus3/white-grey.jpeg" },
        { name: "Concrete", image: "/image/curtin/Aventus3/concrete.jpeg" },
        { name: "Dune Grey", image: "/image/curtin/Aventus3/dune-grey.jpeg" },
        { name: "Platinum", image: "/image/curtin/Aventus3/platinum.jpeg" },
        { name: "Gull", image: "/image/curtin/Aventus3/gull.jpeg" },
        { name: "Domino", image: "/image/curtin/Aventus3/domino.jpeg" },
        { name: "Wren", image: "/image/curtin/Aventus3/wren.jpeg" },
        { name: "Pewter", image: "/image/curtin/Aventus3/pewter.jpeg" },
        {
        name: "Charcoal Grey",
        image: "/image/curtin/Aventus3/charcoal-grey.jpeg",
        },
        {
        name: "Charcoal Denim",
        image: "/image/curtin/Aventus3/charcoal-denim.jpeg",
        },
        { name: "Graphite", image: "/image/curtin/Aventus3/graphite.jpeg" },
        {
        name: "Charcoal Bronze",
        image: "/image/curtin/Aventus3/charcoal-bronze.jpeg",
        },
        { name: "Charcoal", image: "/image/curtin/Aventus3/charcoal.jpeg" },
    ],
    aventus5: [
        { name: "Ice", image: "/image/curtin/Aventus3/ice.jpeg" },
        { name: "White", image: "/image/curtin/Aventus3/white.jpeg" },
        { name: "White Linen", image: "/image/curtin/Aventus3/white-linen.jpeg" },
        { name: "White Stone", image: "/image/curtin/Aventus3/white-stone.jpeg" },
        { name: "White Grey", image: "/image/curtin/Aventus3/white-grey.jpeg" },
        { name: "Concrete", image: "/image/curtin/Aventus3/concrete.jpeg" },
        { name: "Dune Grey", image: "/image/curtin/Aventus3/dune-grey.jpeg" },
        { name: "Platinum", image: "/image/curtin/Aventus3/platinum.jpeg" },
        { name: "Gull", image: "/image/curtin/Aventus3/gull.jpeg" },
        { name: "Domino", image: "/image/curtin/Aventus3/domino.jpeg" },
        { name: "Wren", image: "/image/curtin/Aventus3/wren.jpeg" },
        { name: "Pewter", image: "/image/curtin/Aventus3/pewter.jpeg" },
        {
        name: "Charcoal Grey",
        image: "/image/curtin/Aventus3/charcoal-grey.jpeg",
        },
        {
        name: "Charcoal Denim",
        image: "/image/curtin/Aventus3/charcoal-denim.jpeg",
        },
        { name: "Graphite", image: "/image/curtin/Aventus3/graphite.jpeg" },
        {
        name: "Charcoal Bronze",
        image: "/image/curtin/Aventus3/charcoal-bronze.jpeg",
        },
        { name: "Charcoal", image: "/image/curtin/Aventus3/charcoal.jpeg" },
    ],
    aventus10: [
        { name: "Ice", image: "/image/curtin/Aventus3/ice.jpeg" },
        { name: "White", image: "/image/curtin/Aventus3/white.jpeg" },
        { name: "White Linen", image: "/image/curtin/Aventus3/white-linen.jpeg" },
        { name: "White Stone", image: "/image/curtin/Aventus3/white-stone.jpeg" },
        { name: "White Grey", image: "/image/curtin/Aventus3/white-grey.jpeg" },
        { name: "Concrete", image: "/image/curtin/Aventus3/concrete.jpeg" },
        { name: "Dune Grey", image: "/image/curtin/Aventus3/dune-grey.jpeg" },
        { name: "Platinum", image: "/image/curtin/Aventus3/platinum.jpeg" },
        { name: "Gull", image: "/image/curtin/Aventus3/gull.jpeg" },
        { name: "Domino", image: "/image/curtin/Aventus3/domino.jpeg" },
        { name: "Wren", image: "/image/curtin/Aventus3/wren.jpeg" },
        { name: "Pewter", image: "/image/curtin/Aventus3/pewter.jpeg" },
        {
        name: "Charcoal Grey",
        image: "/image/curtin/Aventus3/charcoal-grey.jpeg",
        },
        {
        name: "Charcoal Denim",
        image: "/image/curtin/Aventus3/charcoal-denim.jpeg",
        },
        { name: "Graphite", image: "/image/curtin/Aventus3/graphite.jpeg" },
        {
        name: "Charcoal Bronze",
        image: "/image/curtin/Aventus3/charcoal-bronze.jpeg",
        },
        { name: "Charcoal", image: "/image/curtin/Aventus3/charcoal.jpeg" },
    ],
};
  
export const tabColors: { [key: string]: ColorOption[] } = {
    "Sheerweave 4300": colorPalette.sheerweave4300,
    "Sheerweave 4500": colorPalette.sheerweave4500,
    "Sheerweave 4510": colorPalette.sheerweave4510,
    "Duo Screen": colorPalette.duoScreen,
    "Aventus 3%": colorPalette.aventus3,
    "Aventus 5%": colorPalette.aventus5,
    "Aventus 10%": colorPalette.aventus10,
};