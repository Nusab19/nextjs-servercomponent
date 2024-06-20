In my next.js 14 project, I need to pass a **state** from a child component to the parent component.

Currently, I declared the state in the parent component and pass it to children. _( thus making everything under it client component )_

But I want to keep things server component when possible. Here's a minimal reproducible example of what I'm trying to do:

- Code: https://github.com/Nusab19/nextjs-servercomponent
- Live Demo: https://nusab19.github.io/nextjs-servercomponent/

The state I have is **isFocused**. The navbar has a button to toggle it. When it's enabled. The whole website is just,

```
<Navbar/>
<FocusedPage />
```

If not enabled,

```
<Navbar/>
<Hero />
<FocusedPage />
...
```

Now whether to render the `<Hero />` component or not, I need to know if `isFocused` is `true` or `false`.

So, I'm keeping it under the client parent component. Thus, `<Hero />` also becomes a client side component.
