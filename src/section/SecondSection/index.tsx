import { FC, useState } from "react";
import classNames from 'classnames'
import CartoonImage from '../../assets/cartoon.jpg'
import MovieImage from '../../assets/movie.png'
import LifeImage from '../../assets/life.jpg'
import FoodImage from '../../assets/food.jpg'
import styles from './styles.module.scss'


const SecondSection: FC = () => {
    const [activeTab, setActiveTab] = useState<string>('cartoon')
    const tabs = [
        {
            key: 'cartoon',
            title: '动画',
            src: CartoonImage
        },
        {
            key: 'food',
            title: '美食',
            src: FoodImage
        },
        {
            key: 'movie',
            title: '电影',
            src: MovieImage
        },
        {
            key: 'life',
            title: '生活',
            src: LifeImage
        }
    ]
    return (
        <div className={styles.secondSection}>
            {/* Tabs */}
            <ul>
                {
                    tabs.map(tab => (
                        <li key={tab.key} onClick={() => setActiveTab(tab.key)}>
                            <span>{tab.title}</span>
                            <span className={classNames(styles.line, { [styles.visible]: activeTab === tab.key })}></span>
                        </li>
                    ))
                }
            </ul>
            {/* Tab Content */}
            <div>
                {
                    tabs.map(tab => (
                        <section key={tab.key}>
                            <h2>{tab.title}</h2>
                            <img src={tab.src} alt={tab.key} />
                        </section>
                    ))
                }
            </div>
        </div>
    )
}

export default SecondSection;