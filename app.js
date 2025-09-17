    // <script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>
    
      let btn = document.querySelector("button");

      btn.addEventListener("click",async () => {
        let facts = await getFacts();
        console.log(facts)
        let p = document.querySelector("#result");
        p.innerText=facts;
      });

      
      let url = "https://catfact.ninja/fact";
      async function getFacts() {
        try {
          let res = await axios.get(url);
        //   console.log(res.data.fact);
          return res.data.fact
        } catch (e) {
          console.log("error -", e);
          return "No fact found"
        }
      }
    