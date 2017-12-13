```
<Model
  source={{
    obj: asset('halake_cube_object/cube.obj'),
  }}
  texture={asset('halake_cube_object/HaLakeTexture.png')}
  style={{
    transform: [
      {translate: [3, 0, -4]},
      {rotateZ: -90},
    ]
  }}
/>
```

```
<View style={{transform: [ {translate: [this.state.translateX, this.state.translateY + 2, this.state.translateZ - 6]} ]}}>
</View>
```

build
[Publishing Your Project](https://facebook.github.io/react-vr/docs/publishing.html)
```
yarn run bundle
```
