import Provider from './Provider';
import style from "../Provider.module.css";

const ProviderList = ({providers}) => {
    return (
        <div>
            <h1 className={style.providerHeader}>Providers</h1>
            <div className={style.providerList}>
                {
                    providers ? (
                        providers.map((watchProvider) => {
                            return (
                                <Provider
                                    provider={watchProvider}
                                    key={watchProvider.provider_id}
                                />
                            )
                        })) : <h1>Loading</h1>
                }
            </div>
        </div>
    );
}

export default ProviderList;