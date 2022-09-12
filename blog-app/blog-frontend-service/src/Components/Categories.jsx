import { NavLink } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const Categories = () => {
    return (
        <>
            <h2 className="categories-title text-center mt-5">
                CATEGORIES
            </h2>

            {/* <div className="categories">
            
            

        </div> */}
            <Carousel slide={false}>
                <Carousel.Item >
                   <NavLink className="category-btn" to="/">Frontend</NavLink>
                   <NavLink className="category-btn" to="/">Backend </NavLink>
                   <NavLink className="category-btn" to="/">ReactJS</NavLink>
                </Carousel.Item>
                <Carousel.Item >
                <NavLink className="category-btn" to="/">NodeJS</NavLink>
            <NavLink className="category-btn" to="/">NestJS</NavLink>
            <NavLink className="category-btn" to="/">Javascript</NavLink>
                </Carousel.Item>
                <Carousel.Item>
                <NavLink className="category-btn" to="/">Java</NavLink>
            <NavLink className="category-btn" to="/">Devops</NavLink>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Categories;