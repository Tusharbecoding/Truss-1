import React from 'react';
import { GetServerSidePropsContext } from 'next';
import { doc, runTransaction, serverTimestamp, setDoc, getDoc } from "firebase/firestore";
import { auth, firestore } from "../../../firebase/clientApp";
import { Community } from '../../../atoms/communitiesAtom'
import safeJsonStringify from 'safe-json-stringify'
import NotFound from '../../../components/Community/NotFound'
import Header from '../../../components/Community/Header'
import PageContent from '../../../components/Layout/PageContent'
import CreatePostLink from '../../../components/Community/CreatePostLink'
import Posts from '../../../components/Posts/Posts'

type CommunityPageProps = {
    communityData: Community;
};

const CommunityPage:React.FC<CommunityPageProps> = ({ communityData }) => {
    if (!communityData) {
        return (
            <NotFound />
        )
    }

    return (
        <>
            <Header communityData={communityData} />
            <PageContent>
                <>
                    <CreatePostLink />
                    <Posts communityData={communityData} />
                </>
                <>
                    <div>
                        RHS
                    </div>
                </>
            </PageContent>
        </>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    try {
        const communityDocRef = doc(firestore, 'communities', context.query.communityId as string)
        const communityDoc = await getDoc(communityDocRef)

        return {
            props: {
                communityData: communityDoc.exists() ? JSON.parse(safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })) : "",
            },
        }
    }
    catch (error)
    {
        console.log(error)
    }
}

export default CommunityPage;