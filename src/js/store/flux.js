const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      collected: [],
      characters: [],
	  BASE_API_URL: "https://rickandmortyapi.com/api"
    },
    actions: {
      async getCharactersFromApi() {
		const currentStore = getStore();
        // fetch characters
        try {
          const response = await fetch(
			`${currentStore.BASE_API_URL}/character`
			);
          const body = await response.json();
          if (!response.ok) throw new Error(`>>> Uh oh, ${body}..`);
          // update characters state
          setStore({
            characters: body.results,
          });
        } catch (error) {
          console.log(error);
        }
      },

      toggleCollected(character) {
        // check if character collected
        const currentStore = getStore();
        const characterFound = currentStore.collected.find(
          (_character) => _character.id === character.id
        );
        if (characterFound) {
          // if it is, update character array
          // in the store, to remove this character
          setStore({
            collected: currentStore.collected.filter(
              (_character) => _character.id !== character.id
            ),
          });
        } else {
          // if its not, we update the collected array
          // in the store, to add this character
          setStore({
            collected: [...currentStore.collected, character],
          });
        }
      },

      // // Remove items from the list by clicking the trash icon
      // removeCollected(index) {
      //   const newCollected = [...store.collected];
      //   newCollected.splice(index, 1);
      //   setStore({ ...store, collected: newCollected });
      // },

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
