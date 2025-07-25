import { Modal, Text, TouchableOpacity, View } from 'react-native';
import Field from '@/shared/Field/Field';
import Button from '@/shared/Button/Button';
import type { AIModalProps } from './AIModal.props';
import { useState } from 'react';
import { s } from './AIModal.style';
import Cross from '@/shared/Cross';

export default function AIModal({ openModal, setOpenModal }: AIModalProps) {
	return (
		<Modal visible={openModal} transparent statusBarTranslucent animationType="fade">
			<View style={s.modalOverlay}>
				{/* <TouchableOpacity onPress={() => setOpenModal(false)}></TouchableOpacity> */}
				<View style={s.modalContent}>
					<View style={s.cross} onPress={() => setOpenModal(false)}>
						<Cross onPress={() => setOpenModal(false)} />
					</View>
					<TouchableOpacity style={s.button}>
						<Text style={s.buttonText}>Scan n Check</Text>
					</TouchableOpacity> 
					<TouchableOpacity style={s.button}>
						<Text style={s.buttonText}>Scan n Match</Text>
					</TouchableOpacity> 
					<TouchableOpacity style={s.button}>
						<Text style={s.buttonText}>Furnish n Fit</Text>
					</TouchableOpacity>
					<TouchableOpacity style={s.button}>
						<Text style={s.buttonText}>Портфолио</Text>
					</TouchableOpacity>
					<TouchableOpacity style={s.button}>
						<Text style={s.buttonText}>Plan n Design</Text>
					</TouchableOpacity> 
				</View>
			</View>
		</Modal>
	);
}
