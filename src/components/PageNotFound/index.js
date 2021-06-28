import React from 'react';
import pageCSS from "./page.module.css";


const PageNotFound = () => {
    return (<>
<section className={pageCSS.page_404}>
	<div className={pageCSS.container}>
		<div className={pageCSS.row}>	
		<div >
		<div>
		<div className={pageCSS.four_zero_four_bg}>
			<h1 className={pageCSS.bg_h1}>404</h1>
		</div>
		
		<div className={pageCSS.contant_box_404}>
		<h3 className={pageCSS.four_h3}>
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
	 </div>
		</div>
		</div>
		</div>
	</div>
</section>
    </>);
}

export default PageNotFound;