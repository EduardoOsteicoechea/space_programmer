# space_programmer

Interactive floor-plan sketch: orthogonal halls, a circular core, and square rooms that clip to an invisible oval.

## Run

Open `index.html` in a browser, or:

```powershell
start index.html
```

## Behavior

- Move the pointer to slide the hall cross
- Rooms are squares at **1.5×** hall thickness
- Rooms with **&lt; 75%** visible area (oval + circular hall clip) hide
- A random contiguous neighbor grows to fill the freed cell
- Hall arms share equal pixel thickness; horizontal/vertical spans cover all room bands

## License

MIT
