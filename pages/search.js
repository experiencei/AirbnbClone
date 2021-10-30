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
            
        </div>
    )
}

export default search
