import "./App.css";
import logo from "./assets/logoH.png";
import SimpleImageSlider from "react-simple-image-slider";
import pic1 from "./assets/pic1.jpg";
// import pic2 from "./assets/pic2.jpg";
import pic3 from "./assets/pic3.jpg";
import pic4 from "./assets/pic4.jpg";
import pic5 from "./assets/pic5.jpg";
import call from "./assets/24h.jpg";
import resDiscount from "./assets/BAR1.jpg";
import K1 from "./assets/kingroom.jpg";
import K2 from "./assets/k2.jpg";
import K3 from "./assets/k3.jpg";
import spa from "./assets/SPA1.jpg";
import gym from "./assets/GYM 1.jpg";
import disR from "./assets/ROOMS1.jpg";
import wa from "./assets/CALL (1).png";
import insta from "./assets/INST.jpg";
import facebook from "./assets/F.png";
import tour from "./assets/TOUR1.jpg";

function App() {
  const MenuItem = ({ title }) => {
    return (
      <div
        style={{
          fontSize: 16,
          color: "#fff",
          fontWeight: "bold",
          // color: "#B8621B",
          fontFamily: "monospace",
        }}
      >
        {title}
      </div>
    );
  };
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#000",
      }}
    >
      {/* header */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img src={logo} style={{ height: 80, width: 80, margin: 20 }} />
          <div
            style={{
              color: "#fff",
              // color: "#B8621B",
              fontWeight: "bold",
              fontSize: 30,
              fontFamily: "unset",
            }}
          >
            The Miracle Of Peace
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              height: 50,
              alignItems: "center",
              justifyContent: "flex-end",
              columnGap: 35,
              marginRight: 40,
              cursor: "pointer",
            }}
          >
            <MenuItem title="HOME" />
            <MenuItem title="ABOUT" />
            <MenuItem title="MENU" />
            <MenuItem title="CONTACTS" />
          </div>
        </div>
        {/* 
        <div
          style={{
            width: "100%",
            height: 2,
            // marginTop: 50,
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            style={{
              backgroundColor: "#B8621B",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </div> */}
      </div>
      {/* end header */}

      {/* body  */}
      <div
        style={{
          width: "100%",
          flexDirection: "column",
          display: "flex",
          // marginTop: 80,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
        }}
      >
        {/* <div style={{ display: "flex", width: "100%" }}> */}

        {/* </div> */}
        <div
          style={{
            fontWeight: "800",
            fontSize: 30,
            color: "#fff",
            maxWidth: 700,
            // marginTop: 30,
            marginBottom: 20,
            fontFamily: "inherit",
          }}
        >
          "Caress your soul"
        </div>
        <div style={{ height: 650, width: "80%" }}>
          <SimpleImageSlider
            width="80%"
            height={650}
            images={[pic1, pic3, pic4, pic5]}
            showBullets={true}
            showNavs={true}
            loop
            autoPlay
            autoPlayDelay={4}
          />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row-reverse",
          }}
        >
          <img
            height="70"
            width="70"
            style={{
              marginLeft: 30,
              marginTop: "10",
              position: "fixed",
              marginRight: 50,
            }}
            src={call}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            backgroundColor: "#000",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // justifyContent: "center",
            }}
          >
            <div
              style={{
                fontWeight: "800",
                fontSize: 25,
                color: "#fff",
                maxWidth: 700,
                marginTop: 30,
                marginBottom: 20,
                fontFamily: "inherit",
              }}
            >
              Our hotel creates dreamy moments to calm the soul of tourists and
              designs an ideal trip for them. ‏Here, a space has been created
              that if you want to stay in a modern or classic place, you have
              the right to choose, our hotel has designed both of them for you
            </div>
            <div
              style={{
                height: 70,
                width: 400,
                borderRadius: 10,
                display: "flex",
                // backgroundColor: "#e6b515",
                marginTop: 10,
                alignItems: "center",
                // justifyContent: "center",
                color: "#000",
                // fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              <input
                style={{
                  display: "flex",
                  height: 45,
                  width: 250,
                  borderRadius: 8,
                  fontWeight: "bold",
                }}
                placeholder="Insert your Email"
              />
              <div
                style={{
                  height: 50,
                  width: 150,
                  borderRadius: 10,
                  display: "flex",
                  backgroundColor: "#B8621B",
                  // marginTop: 50,
                  marginLeft: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                BOOK A ROOM
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: 2,
              marginTop: 50,
              marginBottom: 50,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundColor: "#B8621B",
                width: "80%",
                height: "100%",
              }}
            ></div>
          </div>
          {/* items  */}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              justifyContent: "space-around",
            }}
          >
            {/* item1 */}
            <div
              style={{
                display: "flex",
                height: 400,
                width: 450,
                backgroundColor: "#000",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img height="400" width="500" src={disR} />
            </div>

            <div
              style={{
                display: "flex",
                width: "50%",
                alignItems: "center",
                fontWeight: 600,
                marginTop: 10,
                color: "#fff",
                justifyContent: "center",
                flexDirection: "column",
                fontSize: 25,
              }}
            >
              <h3
                style={{
                  fontSize: 30,
                  color: "#fff",
                  fontWeight: 800,
                  marginBottom: 50,
                }}
              >
                Rooms
              </h3>
              30% Discount for first reservation 50% Discount for second
              reservation 20% Discount for third reservation *By booking and
              staying in our hotel three times, you have only paid the cost of
              two stays, and after three stays, you will benefit from our
              permanent twenty percent discount. In our hotel rooms you can
              experience peace and high tech that lets you to control every
              single thing about the room; temperature , light , ...
              {/* 30% Discount for first reservation
              <br />
              50% Discount for second
              <br />
              reservation 20% Discount for third reservation
              <br />
              20% Discount Permanently for more than three Reservation */}
              <div
                style={{
                  height: 50,
                  width: 200,
                  borderRadius: 10,
                  display: "flex",
                  backgroundColor: "#B8621B",
                  marginTop: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Get it now
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: 2,
              marginTop: 50,
              marginBottom: 50,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundColor: "#B8621B",
                width: "70%",
                height: "100%",
              }}
            ></div>
          </div>

          {/* item2  */}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                marginTop: 10,
                color: "#fff",
                flexDirection: "column",
                fontSize: 25,
              }}
            >
              <h3
                style={{
                  fontSize: 30,
                  color: "#fff",
                  fontWeight: 800,
                  marginBottom: 50,
                }}
              >
                BAR & RESTUARANT
              </h3>
              Our Bar, is the very heart of the hotel: The relaxing atmosphere
              makes it an ideal place where enjoy our large choice of cocktails
              and drinks, and also taste an Iranian traditional snack or our
              HAPPY HOUR. From our rich buffet breakfast and delicious local and
              international cuisine, to our all-day bar and discreet room
              service, our hotel restaurants have something that will appeal to
              every taste.
              <div
                style={{
                  height: 50,
                  width: 200,
                  borderRadius: 10,
                  display: "flex",
                  backgroundColor: "#B8621B",
                  marginTop: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Get it now
              </div>
            </div>
            <div
              style={{
                display: "flex",
                height: 400,
                width: 450,
                backgroundColor: "#000",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img height="400" width="500" src={resDiscount} />
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: 2,
              marginTop: 50,
              marginBottom: 50,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundColor: "#B8621B",
                width: "70%",
                height: "100%",
              }}
            ></div>
          </div>
          {/* item3 */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                height: 400,
                width: 450,
                backgroundColor: "#000",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img height="400" width="500" src={spa} />
            </div>
            <div
              style={{
                display: "flex",
                width: "50%",
                alignItems: "center",
                fontWeight: 600,
                marginTop: 10,
                color: "#fff",
                justifyContent: "center",
                flexDirection: "column",
                fontSize: 25,
              }}
            >
              <h3
                style={{
                  fontSize: 30,
                  color: "#fff",
                  fontWeight: 800,
                  marginBottom: 50,
                }}
              >
                SPA
              </h3>
              Our hotel’s award-winning spa facility, comprises a hot spring
              bathing area, a spa treatment facility, an indoor pool, a sauna.
              This facility is reserved for hotel guests, spa club members, and
              visitors who book spa treatments.
              <div
                style={{
                  height: 50,
                  width: 200,
                  borderRadius: 10,
                  display: "flex",
                  backgroundColor: "#B8621B",
                  marginTop: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Book Now
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: 2,
              marginTop: 50,
              marginBottom: 50,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundColor: "#B8621B",
                width: "70%",
                height: "100%",
              }}
            ></div>
          </div>

          {/* item  */}

          {/* item 4 */}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                marginTop: 10,
                color: "#fff",
                flexDirection: "column",
                fontSize: 25,
              }}
            >
              <h3
                style={{
                  fontSize: 30,
                  color: "#fff",
                  fontWeight: 800,
                  marginBottom: 50,
                }}
              >
                SHAH NESHIN SUITS
              </h3>
              Our Shah Neshin suite is located on the top floor and features a
              king size bed, and two single wall beds if required (max occupancy
              of four guests) It also comes with a private patio, a fridge and
              microwave, tea, free breakfast and coffee facilities, plasma TV,
              in-suite bathroom, hair dryer and toiletries.
              <div
                style={{
                  height: 50,
                  width: 200,
                  borderRadius: 10,
                  display: "flex",
                  backgroundColor: "#B8621B",
                  marginTop: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                More Info
              </div>
            </div>
            <div
              style={{
                display: "flex",
                height: 400,
                width: 450,
                backgroundColor: "#000",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <img height="300" width="400" src={kingroom} /> */}
              <SimpleImageSlider
                width={500}
                height={400}
                images={[K1, K2, K3]}
                showBullets={true}
                showNavs={true}
                loop
                autoPlay
                autoPlayDelay={4}
              />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: 2,
              marginTop: 50,
              marginBottom: 50,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundColor: "#B8621B",
                width: "70%",
                height: "100%",
              }}
            ></div>
          </div>

          {/* item 5 */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                height: 400,
                width: 450,
                backgroundColor: "#000",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img height="400" width="500" src={gym} />
            </div>
            <div
              style={{
                display: "flex",
                width: "50%",
                alignItems: "center",
                fontWeight: 600,
                marginTop: 10,
                color: "#fff",
                justifyContent: "center",
                flexDirection: "column",
                fontSize: 25,
              }}
            >
              <h3
                style={{
                  fontSize: 30,
                  color: "#fff",
                  fontWeight: 800,
                  marginBottom: 50,
                }}
              >
                GYM
              </h3>
              Sporting guests can make use of our hotel exercise room. An ideal
              gym filled with modern fitness equipment such as treadmills, free
              weights and dedicated weight training machines. This fitness
              center is for the exclusive use of our hotel guests and is open 24
              hours a day – allowing you to plan unlimited access to your
              workout program, outside your meeting, entertaining and/or
              sightseeing schedule.
              <div
                style={{
                  height: 50,
                  width: 200,
                  borderRadius: 10,
                  display: "flex",
                  backgroundColor: "#B8621B",
                  marginTop: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Book Now
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: 2,
              marginTop: 50,
              marginBottom: 50,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundColor: "#B8621B",
                width: "70%",
                height: "100%",
              }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                marginTop: 10,
                color: "#fff",
                flexDirection: "column",
                fontSize: 25,
              }}
            >
              <h3
                style={{
                  fontSize: 30,
                  color: "#fff",
                  fontWeight: 800,
                  marginBottom: 50,
                }}
              >
                TOURS
              </h3>
              20% Discount for Real Tours for our old Customers 30% Discount for
              Virtual Tours for business customers 15% Discount for Real Tours
              and 20% Discount for Virtual Tours for corporate Customers.
              <div
                style={{
                  height: 50,
                  width: 200,
                  borderRadius: 10,
                  display: "flex",
                  backgroundColor: "#B8621B",
                  marginTop: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Get it now
              </div>
            </div>
            <div
              style={{
                display: "flex",
                height: 400,
                width: 450,
                backgroundColor: "#000",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img height="400" width="500" src={tour} />
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: 2,
              marginTop: 50,
              marginBottom: 50,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                backgroundColor: "#B8621B",
                width: "70%",
                height: "100%",
              }}
            ></div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              color: "#fff",
              marginBottom: 50,
            }}
          >
            <div>Address: Chaharbagh e Abbasi street ,Isfahan , IRAN</div>
            <div>Email: miracle.of.pace@mail.com</div>
            <div>Tell: +393453484249</div>
            <div>SMS: +393453484249</div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <div>
                <img
                  height="30"
                  width="30"
                  style={{ marginRight: 30 }}
                  src={wa}
                />
                <img
                  height="30"
                  width="30"
                  style={{ marginRight: 30 }}
                  src={facebook}
                />
                <img
                  height="30"
                  width="30"
                  style={{ marginRight: 30 }}
                  src={insta}
                />
              </div>
            </div>
          </div>

          {/* row */}
          {/* <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              justifyContent: "space-around",
            }}
          >

            <div
              style={{
                display: "flex",
                height: 400,
                width: 450,
                backgroundColor: "#000",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img height="300" width="400" src={discount} />
            </div>
            <div
              style={{
                display: "flex",
                width: "50%",
                alignItems: "center",
                fontWeight: 600,
                marginTop: 10,
                color: "#fff",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h3
                style={{
                  fontSize: 30,
                  color: "#fff",
                  fontWeight: 800,
                  marginBottom: 50,
                }}
              >
                Rooms
              </h3>
              Gold Fish Restaurant intends to offer a special discount for
              customers who book through the website
              <div
                style={{
                  height: 50,
                  width: 200,
                  borderRadius: 10,
                  display: "flex",
                  backgroundColor: "#262A56",
                  marginTop: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Get it Now
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* body end */}
    </div>
  );
}

export default App;
