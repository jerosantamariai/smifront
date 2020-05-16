import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
    return (
        <>
            {/* <!-- Footer --> */}
            <footer className="page-footer font-small text-white bg-dark pt-4">

                {/* <!-- Footer Links --> */}
                <div className="container text-center text-md-left">

                    {/* <!-- Grid row --> */}
                    <div className="row">

                        {/* <!-- Grid column --> */}
                        <div className="col-md-4 mx-auto">

                            {/* <!-- Content --> */}
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Footer Content</h5>
                            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.</p>

                        </div>
                        {/* <!-- Grid column --> */}

                        <hr className="clearfix w-100 d-md-none" />

                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 mx-auto">

                            {/* <!-- Links --> */}
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <Link to="#!">Link 1</Link>
                                </li>
                                <li>
                                    <Link to="#!">Link 2</Link>
                                </li>
                                <li>
                                    <Link to="#!">Link 3</Link>
                                </li>
                                <li>
                                    <Link to="#!">Link 4</Link>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- Grid column --> */}

                        <hr className="clearfix w-100 d-md-none" />

                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 mx-auto">

                            {/* <!-- Links --> */}
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <Link to="#!">Link 1</Link>
                                </li>
                                <li>
                                    <Link to="#!">Link 2</Link>
                                </li>
                                <li>
                                    <Link to="#!">Link 3</Link>
                                </li>
                                <li>
                                    <Link to="#!">Link 4</Link>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- Grid column --> */}

                        <hr className="clearfix w-100 d-md-none" />

                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 mx-auto">

                            {/* <!-- Links --> */}
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <Link to="#!">Link 1</Link>
                                </li>
                                <li>
                                    <Link to="#!">Link 2</Link>
                                </li>
                                <li>
                                    <Link to="#!">Link 3</Link>
                                </li>
                                <li>
                                    <Link to="#!">Link 4</Link>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- Grid column --> */}

                    </div>
                    {/* <!-- Grid row --> */}

                </div>
                {/* <!-- Footer Links --> */}

                <hr />

                {/* <!-- Call to action --> */}
                <ul className="list-unstyled list-inline text-center py-2">
                    <li className="list-inline-item">
                        <h5 className="mb-1">Register for free</h5>
                    </li>
                    <li className="list-inline-item">
                        <Link to="#!" className="btn btn-danger btn-rounded">Sign up!</Link>
                    </li>
                </ul>
                {/* <!-- Call to action --> */}

                <hr />

                {/* <!-- Social buttons --> */}
                <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                        <Link className="btn-floating btn-fb mx-1">
                            <i className="fab fa-facebook-f"> </i>
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link className="btn-floating btn-tw mx-1">
                            <i className="fab fa-twitter"> </i>
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link className="btn-floating btn-gplus mx-1">
                            <i className="fab fa-google-plus-g"> </i>
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link className="btn-floating btn-li mx-1">
                            <i className="fab fa-linkedin-in"> </i>
                        </Link>
                    </li>
                    <li className="list-inline-item">
                        <Link className="btn-floating btn-dribbble mx-1">
                            <i className="fab fa-dribbble"> </i>
                        </Link>
                    </li>
                </ul>
                {/* <!-- Social buttons --> */}

                {/* <!-- Copyright --> */}
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <Link to="https://mdbootstrap.com/"> MDBootstrap.com</Link>
                </div>
                {/* <!-- Copyright --> */}

            </footer>
            {/* <!-- Footer --> */}
        </>
    )
}
export default Footer;