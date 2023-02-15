<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaSvripts Events</title>
  </head>
  <style>
    #btn {
      padding: 10px 14px;
      color: black;
      border-radius: 1rem;
      border: 2px solid black;
      background-color: wheat;
      font-weight: bold;
      cursor: pointer;
    }
  </style>
  <body>
    <!--
  Browser Events :
  click
  contextmenu
  mouseover/ mouseout
  mousedown/mouseup 
  mousemove
  
  submit
  focus
  
  DOM content loaded
  
  transitionend  -->
    <div class="container">
      <h1>This is a heading</h1>
      <p id="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla minima
        numquam ut nostrum accusamus cupiditate? Pariatur quidem cupiditate
        consectetur tempora id, quis praesentium, laboriosam veritatis esse,
        voluptatibus et itaque a nisi expedita. Corporis laborum labore
        molestiae soluta temporibus obcaecati, perferendis corrupti ipsam sunt
        perspiciatis id natus! Distinctio qui sunt dolorem at nostrum aut fugiat
        non aliquam vel omnis quo quibusdam obcaecati maxime enim atque
        assumenda similique temporibus laborum, eaque harum in ipsum nulla cum!
        Vel incidunt explicabo similique omnis dignissimos natus perferendis ex
        dolorum molestiae neque culpa officia quaerat quisquam ipsum impedit
        consequatur vero nihil quod, distinctio corporis ea animi cum ab?
        Necessitatibus, sequi architecto qui modi, nemo repellendus dolorem
        impedit ipsa laborum, in cupiditate debitis natus voluptatibus
        aspernatur? Modi placeat, pariatur harum nihil repellendus laboriosam
        eaque, autem aliquid molestiae, perferendis enim. Cumque delectus
        tenetur itaque aspernatur voluptates voluptate sit quaerat, eos,
        consequuntur, labore ipsam commodi soluta cupiditate quisquam
        necessitatibus explicabo laboriosam nostrum consectetur deserunt? Fuga,
        voluptas optio. Dolore doloribus porro, officia fugiat possimus minus
        architecto saepe eveniet, consectetur magnam perferendis facere totam
        natus odit! Enim tenetur perspiciatis, ducimus sequi provident
        asperiores assumenda necessitatibus ea facilis molestiae voluptatem
        repellat quidem itaque voluptas! Quam illum, nisi molestias atque eum,
        soluta minus veniam animi dolor commodi doloremque ipsa officiis,
        voluptas cum praesentium excepturi sit iste fugit dolorem accusantium
        delectus eligendi! Sapiente, laudantium dolores harum, repellendus, vero
        eos odio tempora quisquam rem nam aut ipsam incidunt officiis.
      </p>
    </div>
    <button id="btn" onclick="toggleHide()">show/Hide</button>
    <script>
      
      let para = document.getElementById("para");
      para.addEventListener("mouseover", function run() {
        console.log("mouse inside");
      });
      para.addEventListener("mouseout", function run() {
        console.log("mouse now went outside");
      });

      function toggleHide() {
        //    let  btn = document.getElementById('btn');
        //    let para  = document.getElementById('para');
        if (para.style.display != "none") {
          para.style.display = "none";
        } else {
          para.style.display = "block";
        }
      }
    </script>
  </body>
</html>
