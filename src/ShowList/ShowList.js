import {useEffect, useState} from "react";
import Button from "../Components/Button/Button";
import ShowListCard from "./showListCard/showListCard";
import styles from './showList.module.css';

const ShowList= () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=girls")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
        }, [])
        console.log("items", items)

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
           <ShowListCard>
                {items.map(item => (
                    <li className={styles.showListLi} key={item.show.id}>
                        <div className={styles.wrapper}>
                            <div className={styles.one}>
                                <img src={item.show.image.medium} alt="Logo" />
                            </div>
                            <div className={styles.two}>
                                <p>Name: {item.show.name} </p>
                                { item.show.summary &&
                                    <div>
                                        Summary:
                                        <p dangerouslySetInnerHTML= {{__html: item.show.summary}}></p>
                                    </div>
                                }
                            </div>
                        </div>
                        <Button images={item.show.image.medium} review={item.show.rating.average} 
                            summary={item.show.summary}  label="Show"   
                        />
                    </li>
                ))}
            </ShowListCard>
        );
    }
}

export default ShowList;