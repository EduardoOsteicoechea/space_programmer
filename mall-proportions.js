/**
 * Store area proportions inferred from Liverpool
 * "DIAGRAMAS DE RELACIONES ESPACIALES" (Jul 2025).
 *
 * Method: count diagram blocks per universe; large/central circles = 2×,
 * standard yellow/grey rectangles = 1×, brand shop-in-shop = 0.5×,
 * focal/service = 0.35×. Column/row weights sum to 4 (one grid band).
 */
window.MALL_PROPORTIONS = {
  source: "InRevitExistingAIRendererWithAPI/sources/DIAGRAMAS DE REL ESPACIALES.pdf",
  tiers: {
    anchor: 2.0,
    primary: 1.5,
    standard: 1.0,
    specialty: 0.5,
    service: 0.35,
  },
  /** Share of sellable floor by universe (block-plan + radial diagrams). */
  universeShare: {
    hogar: 0.28,
    mujer: 0.26,
    deportes: 0.18,
    alimentos: 0.14,
    infantiles: 0.09,
    multimedia: 0.05,
  },
  /** Quadrant → Liverpool universe (maps to hall cross corners). */
  quadrants: {
    nw: {
      id: "hogar",
      label: "Hogar gran formato",
      cols: [1.6, 0.9, 0.9, 0.6],
      rows: [0.9, 0.9, 1.1, 1.1],
      hue: 28,
      sections: [
        ["101 Muebles", "634 L.Bca", "623 Cocina", "152 Mesa"],
        ["156 Luz", "161 Cuadros", "108 Tapicería", "121 Tapetes"],
        ["154 Fina", "147 Flores", "157 Decor", "149 Boutique"],
        ["343 Garage", "345 Mascotas", "207 Motos", "322 Navidad"],
      ],
      tiers: [
        ["anchor", "primary", "primary", "standard"],
        ["standard", "standard", "standard", "specialty"],
        ["standard", "specialty", "standard", "primary"],
        ["standard", "specialty", "specialty", "specialty"],
      ],
    },
    ne: {
      id: "mujer",
      label: "Mujer moda / belleza",
      cols: [0.9, 0.9, 1.0, 1.2],
      rows: [1.3, 0.9, 0.9, 0.9],
      hue: 320,
      sections: [
        ["559 Diseño", "702 Cosmét.", "707 Spa", "701 Frag."],
        ["504 Lencería", "571 Joyería", "377 Acc.Finos", "550 Zapatos"],
        ["448 Niñas", "450 Niños", "436 Bebés", "514 Bolsas"],
        ["559 Contemp.", "504 Íntimo", "571 Relojes", "511 Acc."],
      ],
      tiers: [
        ["primary", "anchor", "primary", "primary"],
        ["standard", "standard", "standard", "anchor"],
        ["standard", "standard", "standard", "primary"],
        ["primary", "standard", "standard", "specialty"],
      ],
    },
    sw: {
      id: "deportes",
      label: "Deportes / running",
      cols: [1.2, 0.9, 1.1, 0.8],
      rows: [1.2, 1.1, 0.9, 0.8],
      hue: 145,
      sections: [
        ["205 Ropa Dep.", "Nike*", "Adidas*", "Puma*"],
        ["237 Zapatos", "203 Tenis", "251 Juvenil", "402 Tenis Niñ@"],
        ["201 Acc.Dep.", "Outdoor", "Ciclismo", "Golf"],
        ["343 Ferret.", "345 Mascotas", "207 Motos", "206 Aparatos"],
      ],
      tiers: [
        ["anchor", "specialty", "specialty", "specialty"],
        ["primary", "primary", "primary", "standard"],
        ["standard", "specialty", "specialty", "specialty"],
        ["standard", "specialty", "specialty", "standard"],
      ],
    },
    se: {
      id: "alimentos",
      label: "Alimentos / dulcería",
      cols: [1.5, 0.9, 0.8, 0.8],
      rows: [1.5, 0.9, 0.8, 0.8],
      hue: 38,
      sections: [
        ["898 Gourmet", "391 Dulcería", "369 Snack", "392 Alim."],
        ["897 Restaur.", "302 Gourmet", "388 Vinos", "365 Librería"],
        ["898 Café", "825 Anim.", "338 Papel.", "323 Viaje"],
        ["424 Juguetes", "425 Disney", "327 Escolar", "433 GAP"],
      ],
      tiers: [
        ["anchor", "primary", "specialty", "specialty"],
        ["anchor", "primary", "primary", "standard"],
        ["specialty", "specialty", "standard", "standard"],
        ["anchor", "specialty", "specialty", "specialty"],
      ],
    },
  },
};
