/* --------------------------------------------------GITHUB------------------------------------------------------ */

let arr = ["https://github-readme-streak-stats.herokuapp.com?user=sriramalavalapati3&theme=radical&hide_border=true&border_radius=6.5&date_format=M%20j%5B%2C%20Y%5D", "https://github-readme-stats.vercel.app/api/top-langs/?username=sriramalavalapati3&theme=outrun","https://github-readme-stats.vercel.app/api?username=sriramalavalapati3&count_private=true"];
let x=1
let j=0;
 function slides2(){
 document.getElementById("image2").src = arr[j];
    if (j<arr.length - 1) j++;
    else j=0;
}
setInterval(slides2, 1500);

/* --------------------------------------------------GITHUB------------------------------------------------------ */