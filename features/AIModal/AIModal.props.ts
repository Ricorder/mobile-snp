import type { Dispatch, SetStateAction } from "react";

export interface AIModalProps {
	setOpenModal: Dispatch<SetStateAction<boolean>>;
	openModal: boolean;
	name: string;
	description: string;
	setName: Dispatch<SetStateAction<string>>;
	setDescription: Dispatch<SetStateAction<string>>;
	savePlan: () => void;
}
