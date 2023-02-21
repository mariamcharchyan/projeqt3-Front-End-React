import Categories from './Categories/Categories'
import MainBoxToys from './MainBoxToys/MainBoxToys'
import MainFeatured from './MainFeatured/MainFeatured';



export default function Main() {
return(
<>
<main className="App-main">
<div className="box">
    <div className="cat-feat">
        <div className="categories">
            <h3>Categories</h3>
            <Categories />
            {/* <li><a href="#" className="link-categories">All Products</a></li>
            <li><a href="#" className="link-categories">Toys for BOYS</a></li>
            <li><a href="#" className="link-categories">Toys for GIRLS</a></li>
            <li><a href="#" className="link-categories">Educational toys</a></li>
            <li><a href="#" className="link-categories">Logical toys</a></li> */}
        </div>
        <div className="featured">
            <h3>Featured</h3>
            <MainFeatured />
        </div>
    </div>
    <div id="box-toys" className="box-toys">
    <MainBoxToys />
    </div>
</div>
</main>
</>
);
}