import style from "../Provider.module.css"
import TitleList from "./TitleList";

const ProviderDetails = ({provider, shows, watchList, toggle}) => {
    return (
        <div className={style.providerDetailContainer}>
            <TitleList
              name={`${provider.provider_name} Trending Movies`}
              titles={shows}
              toggle={toggle}
              watchList={watchList}
            />
        </div>
    );
}

export default ProviderDetails;