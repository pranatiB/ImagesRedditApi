import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { fetchData, convertDate } from './utils'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
    Navbar,
    Searchbar,
    ImageContainer,
    ImageCard,
    Thumbnail,
    Title,
    Overlay,
    Modal,
    Button
} from './ImageStyles'



const Image = () => {

    const { status, data } = useQuery('images', fetchData)
    const [searchWord, setSearchWord] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [selectedId, setSelectedId] = useState(0);
    const [isOpen, setIsOpen] = useState(false);



    useEffect(() => {
        if (status === 'success') {
            setFilteredResults(data);
            const match = data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setFilteredResults(match);
        }
    }, [searchTerm, data, status]);


    const display = (item) => {
        const { author, ups, url, title, created_utc, id } = item;
        setSelectedId({ author, ups, url, title, created_utc: convertDate(created_utc), id });
        setIsOpen(true);
    }


    const onKeyDownHandler = (e) => {
        if (e.keyCode === 13) {
            setSearchTerm(e.target.value);
        }
    }


    const handleChange = (event) => {
        const term = event.target.value;
        setSearchWord(term);
    }


    return (
        <div>
            {status === 'loading' && <h1>Loading...</h1>}
            {status === 'success' && (
                <>

                    <Navbar>
                        <Searchbar
                            type="text"
                            placeholder="🔎 Search..."
                            name="search"
                            value={searchWord}
                            onChange={handleChange}
                            onKeyDown={(e) => onKeyDownHandler(e)
                            }
                        />
                    </Navbar>
                    <ImageContainer>
                        <AnimateSharedLayout type='crossfade' transition={{ duration: 5 }}>
                            {(filteredResults).map((item) => (
                                <ImageCard style={{
                                    cursor: selectedId.id === item.id ? 'none' : 'pointer',
                                    opacity: selectedId.id === item.id ? 0 : 1
                                }}
                                    key={item.id}
                                    layoutId={item.id}
                                    onClick={() => display(item)}
                                    disabled={isOpen}
                                    animate
                                >
                                    <Thumbnail src={item.thumbnail} alt='' />
                                    <Title><h3><centre>{item.title}</centre></h3></Title>
                                </ImageCard>
                            ))}

                            <AnimatePresence>
                                {isOpen && (
                                    <>
                                        <Overlay />
                                        <Modal layoutId={selectedId.id}>
                                            <LazyLoadImage
                                                effect='blur'
                                                width='100%'
                                                height='450px'
                                                src={selectedId.url} />
                                            <motion.div><strong>Title :</strong>{selectedId.title}</motion.div>
                                            <motion.div><strong>Author :</strong>{selectedId.author}</motion.div>
                                            <motion.div><strong>Date of Creation :</strong>{selectedId.created_utc}</motion.div>
                                            <motion.div><strong>Upvotes :</strong>{selectedId.ups}  </motion.div>
                                            <Button onClick={() => {
                                                setSelectedId(0);
                                                setIsOpen(false)
                                            }}> Close </Button>
                                        </Modal>
                                    </>
                                )}

                            </AnimatePresence>
                        </AnimateSharedLayout>
                    </ImageContainer>
                </>

            )}

        </div>
    )
}

export default Image
