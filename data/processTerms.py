import json
import re
from dataclasses import dataclass
from typing import Optional, List
from customExceptions import InvalidTermException


class TextFileHandler:
    # Text Flie Handling Utility methods

    @staticmethod
    def read_file(path: str) -> str:
        """ read the content of a file in a given path """
        with open("path", "r") as text_file:
            content = text_file.read()
        return content

    @staticmethod
    def split_content(content: str) -> list:
        """Split the content by empty lines"""
        paragraphs = re.split(r'\n\s*\n', content)
        return paragraphs


@dataclass
class Term:
    """
    A class that represents a term in economy.
    Each 
    """
    name: str
    explanation: str
    # Not initializing it to an empty array to avoid memory sharing
    resources: Optional[List]

    def to_dict(self) -> dict:
        """Converting the Term into a dictionary is an intermediate step in
        the process of converting those into JSON"""
        return {
            "name": self.name,
            "explanation": self.explanation,
            "resources": [] if not self.resources else self.resources,
        }


def split_by_double_square_brackets(text: str):
    raw_elements = re.split(r'\[\[(.*?)\]\]', text)
    return [elem.strip() for elem in raw_elements if elem.strip()]


def parse_text_to_Term(text: str):
    """
    We need to convert this syntax:
    [[ term's name ]]
    [[Explanation on the term]]
    [[resource1, resource2, resource3, ...]]
    To a Term object,
    where the resources section is optional.
    """
    elements = split_by_double_square_brackets(text)
    num_of_elements = len(elements)
    if num_of_elements == 2:
        # then we only have the term's name and explanation.
        name, explanation = elements
        return Term(name=name, explanation=explanation, resources=list())
    elif num_of_elements == 3:
        # We also include some resources(links) for further reading this particular term
        # TODO: find out how to represent and process resources, or decide to add those manually.
        name, explanation, resources = elements
        return Term(name=name, explanation=explanation, resources=resources)
    else:
        raise InvalidTermException(
            f"Found {num_of_elements} fields in the given term. Expected 2 or 3.")
