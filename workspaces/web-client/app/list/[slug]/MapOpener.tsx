"use client";

import { Suspense, lazy } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { PeakList } from "@lib/types";
import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const Map = lazy(() => import("./Map"));

interface Props {
  peakList: PeakList;
}

export default function PageContent({ peakList }: Props) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button
        size="sm"
        leftIcon={<FaMapLocationDot />}
        colorScheme="teal"
        onClick={onOpen}
      >
        Map
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`${peakList.name} Map`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Suspense>
              <Map peaks={peakList.peaks} />
            </Suspense>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
