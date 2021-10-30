import { useRouter } from "next/dist/client/router";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function search({ searchResults }) {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;

    return (
        <div>
              <Header />
         <main  className="flex">
            <section className="flex-grow pt-14 px-6">
            <p>
                300+ stay - {range} - for {noOfGuests} guests
            </p>
            <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stay in {location}
          </h1>
            </section>

         </main>


              <Footer />
        </div>
    )
}

export default search;

export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").then(
      (res) => res.json()
    );
  
    return {
      props: {
        searchResults,
      },
    };
  }
