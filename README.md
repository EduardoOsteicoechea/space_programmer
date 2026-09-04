# space_programmer

Interactive floor-plan sketch over a real Revit area contour, with Liverpool mall store proportions.

## Run

```powershell
start index.html                  # contour + mall proportions
start index-contour-finalized.html  # frozen equal-grid baseline
```

## Files

| File | Purpose |
|------|---------|
| `index.html` | Live demo: Revit contour + weighted store grid |
| `index-contour-finalized.html` | Locked baseline (uniform room sizes) |
| `contour.json` / `contour-data.js` | Area 1927977 outer + central island |
| `mall-proportions.js` | Store size weights from Liverpool spatial diagrams |

## Proportions source

Derived from `InRevitExistingAIRendererWithAPI/sources/DIAGRAMAS DE REL ESPACIALES.pdf`:

- **NW** Hogar — anchor Muebles / Línea blanca (large blocks)
- **NE** Mujer — anchor Cosméticos / Zapatos mujer
- **SW** Deportes — anchor Ropa deportiva / calzado
- **SE** Alimentos — anchor Gourmet / Restaurante (~50% of food stack)

Tier scale: anchor 2× · primary 1.5× · standard 1× · specialty 0.5×

## License

MIT
