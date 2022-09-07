import './qr-code.css';
import {AiOutlineHeart, AiOutlineCompass, AiOutlineSearch} from "react-icons/ai";
import { FaInstagramSquare }from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import {MdHomeFilled} from "react-icons/md";

function QRcode() {
    return (
        <div>
            <header>
				<nav class="navbar">
					<div class="container">
						<FaInstagramSquare/>
						<div class="searchbar">
							<AiOutlineSearch/>
							<input type="text" placeholder="Search" />
						</div>
						<div class="nav-links">
							<ul class="nav-group">
								<li class="nav-item">
									<a href="##"><MdHomeFilled/></a>
								</li>
								<li class="nav-item">
									<a href="https://www.instagram.com/direct/inbox/"><RiMessengerLine/></a>
								</li>
								<li class="nav-item">
									<a href="https://www.instagram.com/explore/"><AiOutlineCompass/></a>
								</li>
								<li class="nav-item">
									<a href="##"><AiOutlineHeart/></a>
								</li>
								<li class="nav-item">
									<div class="action">
										<div class="profile" onclick="menuToggle()">
											<img src="https://www2.deloitte.com/content/dam/Deloitte/nl/Images/promo_images/deloitte-nl-tnfd-framework-beta-release-promo.jpg" alt="user Avatar" />
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
            <main class="main-cls" role="main">
                <div class="bg-img">
                    <div class="box">
                        <div class="box-1">
                            <div class="heading-box">
                                <h1 class="heading">QR code helps people follow you quickly</h1>
                            </div>
                            <div class="para-div">
                                <div class="para">
                                    People can scan your QR code with their smartphones camera to see your profile.
                                    Download and print your QR code, then stick it on your products, posters and more.
                                </div>
                            </div>
                        </div>
                        <div class="cd-box">
                            <div class="canvas-div">
                                <canvas class="cnvs"></canvas>
                            </div>
                        </div>
                        <div class="pbc">
                            <div class="pbc2">
                                <div class="pbc3">
                                    <button class="btn" value="orangePurple">
                                        <div class="pstbd">
                                            <div class="btn-div"></div>
                                        </div>
                                    </button>
                                    <button class="btn1" value="bluePurple">
                                        <div class="pstbd">
                                            <div class="btn-div1"></div>
                                        </div>
                                    </button>
                                    <button class="btn2" value="blue">
                                        <div class="pstbd">
                                            <div class="btn-div2"></div>
                                        </div>
                                    </button>
                                    <button class="btn3" value="green">
                                        <div class="pstbd">
                                            <div class="btn-div3"></div>
                                        </div>
                                    </button>
                                    <button class="btn4" value="grey">
                                        <div class="pstbd">
                                            <div class="btn-div4"></div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <button aria-label="Download QR code" class="submit-btn" type="submit">
                                    <div class="sub-btn-div">Download QR code</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );

}

export default QRcode;