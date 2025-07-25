import type { TouchableOpacityProps } from 'react-native';

export interface PlanProps extends TouchableOpacityProps {
	status: "CHECKED" | "REJECT" | "UNDER_REVIEW" | "IN_WORK";
	image: string;
	name: string;
	description: string;
	id: string;
}

// export const blurhash = '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
// export const blurhash = 'LEHV6nWB2yk8pyo0adR*.7kCMdnj';
export const blurhash = 'LlGbn:IAM|oz?wRORjbI%NbHWBa{';