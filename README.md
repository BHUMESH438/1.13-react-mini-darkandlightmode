# dark-theme-swtup-steps

- #### set a global variable for bg and fn in css
- #### give a state variable in parent component with a defult class of dark theme
- #### make togglefn and give it to a button and apply if condition to the toggle fn
- #### set the 2 root class in css as light and dark
- #### in app parent compo give the state variable theme as a dependecy state variable to use effect
- #### so at the toggel button click the page will rerender
- #### to add the class use the documentname.classname and also give the light theme as default in state variable

````js
 const [theme, settheme] = useState('light-theme');
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  const toggletheme = () => {
    if (theme === 'light-theme') {
      settheme('dark-theme');
    } else settheme('light-theme');
  };```
````
