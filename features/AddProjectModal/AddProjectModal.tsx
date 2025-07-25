import { Modal, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Field from '@/shared/Field/Field';
import Button from '@/shared/Button/Button';
import type { AddProjectModalProps } from './AddProjectModal.props';
import { useState } from 'react';
import { s } from './AddProjectModal.style';

export default function AddProjectModal({ openModal, name, description, setName, setDescription, savePlan }: AddProjectModalProps) {
	return (
		<Modal visible={openModal} transparent statusBarTranslucent animationType="fade">
			<View style={s.modalOverlay}>
				<View style={s.modalContent}>
					<Text style={s.modalTitle}>Введите название проекта</Text>
					<Text style={s.modalDescription}>Пока готовится отчет по вашему проекту, введите название, под которым его сохранить</Text>
					<Field text={name} onChangeText={setName} placeholder="Название" />
					<Field text={description} onChangeText={setDescription} placeholder="Описание" />
					<Button onPress={savePlan} title="Сохранить" />
				</View>
			</View>
		</Modal>
	);
}
