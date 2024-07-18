ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	border: 1px solid #e7e7e7;
	background-color: #f3f3f3;
  }
  
  li {
	float: left;
  }
  
  li a {
	display: block;
	color: #666;
	text-align: center;
	padding: 14px 16px;
	text-decoration: none;
  }
  
  li a:hover:not(.active) {
	background-color: #ddd;
  }
  
  li a.active {
	color: white;
	background-color: #04AA6D;
  }
  .grid-container {
	display: grid;
	grid-template-columns: auto auto auto auto;
	gap: 10px;
	background-color: #2196F3;
	padding: 10px;
  }
  
  .grid-container > div {
	background-color: rgba(255, 255, 255, 0.8);
	border: 1px solid black;
	text-align: center;
	font-size: 30px;
  }
   /* Make the image fully responsive */
   .carousel-inner img {
	width: 100%;
	height: 600px;
	  
	}
	
  .cssmenu{
	  float:right;
	  padding-top: 6px;
  }
  .cssmenu ul li {
	  display: inline-block;
  }
  .cssmenu ul li a {
	  color: #000;
	  display: block;
	  padding: 40px 15px;
	  letter-spacing: 1px;
	  font-size: 1.1em;
	  font-family: 'Karla', sans-serif;
	  text-transform: uppercase;
	  margin: 13px 10px;
  }
  .cssmenu li.active> a, .cssmenu li> a:hover {
	  color:#000;
	  background:#ff8100;
	  -webkit-transition: all 0.3s ease;
	  -moz-transition: all 0.3s ease;
	  -o-transition: all 0.3s ease;
	  transition: all 0.3s ease;
  }
  .wrap{
	  width:80%;
	  margin:0 auto;
	  -moz-transition:all .2s linear;
	  -webkit-transition:all .2s linear; 
	  -o-transition:all .2s linear; 
	  -ms-transition:all .2s linear;
	  }
	  .header{
	  background:#f6f6f6;
	  }
	  .index-banner{
		  background:url(../images/banner.jpg)no-repeat;
		  padding:10px 0;
	  }
	  .banner-wrap{
		  width: 80%;
		  margin: 0 auto;
	  }